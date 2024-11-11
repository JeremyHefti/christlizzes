import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {UsernamePopupComponent} from "../username-popup/username-popup.component";
import {DialogService} from "../dialog.service";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  items: MenuItem[] | undefined;

  constructor(private dialogService: DialogService) {}  // Inject DialogService

  ngOnInit() {
    this.items = [
      {
        label: 'User',
        icon: 'pi pi-user',
        command: () => {
          console.log('user click')
          this.dialogService.showDialog();
        }
      },
      { label: 'Search', icon: 'pi pi-search' }
    ];
  }

}
