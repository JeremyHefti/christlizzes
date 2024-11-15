import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {
  private verificationInterval: any;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.signUp(this.email, this.password)
  }

  ngOnInit(): void {
    this.verificationInterval = setInterval(() => {
      this.authService.checkEmailVerification();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.verificationInterval) {
      clearInterval(this.verificationInterval);
    }
  }
}
