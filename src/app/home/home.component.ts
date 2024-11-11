import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  username: string | null = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsername().subscribe((username) => {
      this.username = username;
    });
  }
}

