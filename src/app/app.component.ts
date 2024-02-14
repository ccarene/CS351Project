import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StagingApiComponent } from './staging-api/staging-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StagingApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VinylDestinationV1';
}
