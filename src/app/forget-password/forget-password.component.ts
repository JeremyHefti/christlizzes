import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  email: string | undefined;
  constructor(private authService: AuthService) {
  }
  onResetPassword() {
    if (this.email) {
      this.authService.resetPassword(this.email)
          .then(() => {
            // Erfolgreiche Rücksetzung, der Benutzer wird informiert
          })
          .catch((error) => {
            console.error('Fehler beim Zurücksetzen des Passworts:', error);
          });
    } else {
      console.log('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
  }
}
