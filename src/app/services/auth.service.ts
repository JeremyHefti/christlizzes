import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {getAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toast: any;

  constructor(
      private afAuth: AngularFireAuth,
      private router: Router,
      private messageService: MessageService,
      private firestore: AngularFirestore
  ) { }

    signUp(email: string, password: string): Promise<void> {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then(() => this.afAuth.currentUser)
            .then((user) => {
                if (user) {
                    const userRef = this.firestore.collection('users').doc(user.uid);
                    return userRef.set({
                        email: user.email,
                        uid: user.uid,
                        createdAt: new Date(),
                        username: '' // Leeres Feld für username, das später aktualisiert werden kann
                    });
                } else {
                    throw new Error('Kein Benutzer gefunden.');
                }
            })
            .then(() => {
                this.showToast('success', 'Account wurde erfolgreich erstellt');
                this.router.navigate(['/home']);
            })
            .catch((error) => {
                this.handleError(error);
                return Promise.reject(error);
            });
    }

    setUsername(username: string): Promise<void> {
        return this.afAuth.currentUser
            .then((user) => {
                if (user) {
                    // `displayName` aktualisieren
                    return user.updateProfile({ displayName: username }).then(() => {
                        // Firestore-Dokument aktualisieren
                        const userRef = this.firestore.collection('users').doc(user.uid);
                        return userRef.update({ username: username });
                    });
                } else {
                    throw new Error('Kein Benutzer gefunden.');
                }
            })
            .then(() => {
                this.showToast('success', 'Benutzername wurde erfolgreich gesetzt');
            })
            .catch((error) => {
                this.handleError(error);
                return Promise.reject(error);
            });
    }


    getUsername(): Observable<string> {
        return this.afAuth.authState.pipe(
            map(user => user?.displayName || '')
        );
    }


    login(email: string, password: string) {
    console.log('Email:', email, 'Password:', password);
    this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          this.showToast('success', 'Login war erfolgreich');
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          this.handleError(error);
        });
  }

  logout() {
    this.afAuth.signOut()
        .then(() => {
          console.log('Abgemeldet');
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          console.log('Fehler beim Abmelden', error);
        });
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.afAuth.authState.pipe(
        map(user => user !== null)
    );
  }

  private showToast(severity: string, summary: string) {
    this.messageService.add({ severity, summary, detail: summary, life: 3000 });
  }

  private handleError(error: any) {
    switch (error.code) {
      case 'auth/invalid-email':
        this.showToast('error', 'Die E-Mail-Adresse ist ungültig.');
        console.error('Die E-Mail-Adresse ist ungültig.');
        break;
      case 'auth/user-not-found':
        this.showToast('error', 'Kein Benutzer mit dieser E-Mail-Adresse gefunden.');
        console.error('Kein Benutzer mit dieser E-Mail-Adresse gefunden.');
        break;
      case 'auth/email-already-in-use':
        this.showToast('error', 'Die E-Mail-Adresse wird bereits verwendet.');
        console.error('Die E-Mail-Adresse wird bereits verwendet.');
        break;
      case 'auth/wrong-password':
        this.showToast('error', 'Das Passwort ist falsch.');
        console.error('Das Passwort ist falsch.');
        break;
      case 'auth/invalid-credential':
        this.showToast('error', 'Die angegebenen Anmeldedaten sind ungültig.')
        break;
      default:
        this.showToast('error', 'Ein unbekannter Fehler ist aufgetreten: ' + error.message);
        console.error('Ein unbekannter Fehler ist aufgetreten: ', error.message);
    }
  }
}
