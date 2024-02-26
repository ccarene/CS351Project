import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vinyl-card',
  standalone: true,
  imports: [],
  templateUrl: './vinyl-card.component.html',
  styleUrl: './vinyl-card.component.css'
})
export class VinylCardComponent {
  @Input({ required: true }) vinylName!: string;
}
