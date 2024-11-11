import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UsernamePopupComponent} from "../username-popup/username-popup.component";
import {DialogService} from "../services/dialog.service";
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  isUser: boolean = false;
  isVisible: boolean = false;
  private authSubscription: Subscription | undefined;

  constructor(private dialogService: DialogService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isUser = isAuthenticated;
      this.updateMenuItems();
    });
  }

  updateMenuItems() {
    this.items = [
      {
        label: 'User',
        icon: 'pi pi-user',
        command: () => {
          console.log('user click')
          this.dialogService.showDialog();
        }
      },
      { label: 'Search', icon: 'pi pi-search' },
      {
        label: this.isUser ? 'Logout' : 'Sign In',
        icon: this.isUser ? 'pi pi-sign-out' : 'pi pi-sign-in',
        command: () => {
          if (this.isUser) {
            this.authService.logout();
          } else {
            this.router.navigate(['/login'])
          }
        }
      }
    ];
  }
}
