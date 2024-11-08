import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toast: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private messageService: MessageService) { }
  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.showToast('success', 'Login was successfully')
        this.router.navigate(['/home'])
      })
      .catch((error) => {
        this.handleError(error);
      })
  }
  login(email: string, password: string) {
    console.log('Email:', email, 'Password:', password);
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.showToast('success', 'Register was successfully')
        this.router.navigate(['/home'])
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  logout() {
    this.afAuth.signOut()
      .then(() => {
        console.log('Logged out')
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        console.log('Cant logged out', error)
      })
  }
  get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }

  private showToast(severity: string, summary: string) {
    this.messageService.add({ severity, summary, detail: summary, life: 3000 });
  }

  private handleError(error: any) {
    switch (error.code) {
      case 'auth/invalid-email':
        this.showToast('error', 'The email address is invalid.');
        console.error('The email address is invalid.');
        break;
      case 'auth/user-not-found':
        this.showToast('error', 'No user found with this email address.');
        console.error('No user found with this email address.');
        break;
      case 'auth/email-already-in-use':
        this.showToast('error', 'The email address is already in use.');
        console.error('The email address is already in use.');
        break;
      case 'auth/wrong-password':
        this.showToast('error', 'The password is incorrect.');
        console.error('The password is incorrect.');
        break;
      case 'auth/invalid-credential':
        this.showToast('error', 'The supplied auth credential is incorrect.')
        break;
      default:
        this.showToast('error', 'An unknown error occurred: ' + error.message);
        console.error('An unknown error occurred: ', error.message);
    }
  }
}
