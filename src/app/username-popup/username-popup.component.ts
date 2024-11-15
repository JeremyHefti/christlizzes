import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-username-popup',
  templateUrl: './username-popup.component.html',
  styleUrls: ['./username-popup.component.css']
})
export class UsernamePopupComponent implements OnInit {
  username: string = '';
  visible: boolean = false;

  constructor(private authService: AuthService, private dialogService: DialogService) {}

  ngOnInit() {
    this.authService.getUsername().subscribe(username => {
      this.username = username || "";
    });
    this.dialogService.dialogVisible$.subscribe((visible) => {
      this.visible = visible;
    });
  }

  closeDialog() {
    this.visible = false;
  }

  saveProfile() {
    if (this.username.trim()) {
      this.authService.setUsername(this.username)
          .then(() => {
            this.authService.getUsername().subscribe(username => {
              this.username = username;
            });
            console.log('Benutzername wurde erfolgreich aktualisiert');
            this.closeDialog();
          })
          .catch((error) => {
            console.error('Fehler beim Aktualisieren des Benutzernamens:', error);
          });
    } else {
      console.warn('Bitte einen gültigen Benutzernamen eingeben.');
    }
  }
}