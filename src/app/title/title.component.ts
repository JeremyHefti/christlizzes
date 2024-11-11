import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() text: string | null = '';
  @Input() type: 'title' | 'subtitle' | 'text' = 'title';
}
