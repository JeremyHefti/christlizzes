import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {DialogService} from "../services/dialog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  username: string | null = '';
  showPopUp: boolean = false;

  constructor(private authService: AuthService, private dialogService: DialogService) {}

  ngOnInit() {
    this.authService.getUsername().subscribe((username) => {
      this.username = username || "";

      if (!this.username) {
        this.dialogService.showDialog();
      }
    });
  }
}

