import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogVisible = new Subject<boolean>();
  dialogVisible$ = this.dialogVisible.asObservable();

  showDialog() {
    this.dialogVisible.next(true);  // Set dialog visibility to true
  }

  hideDialog() {
    this.dialogVisible.next(false);  // Set dialog visibility to false
  }
}
