import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
      this.items = [
        { label: 'User', icon: 'pi pi-user' },
        { label: 'Search', icon: 'pi pi-search' }
      ];
  }

}
