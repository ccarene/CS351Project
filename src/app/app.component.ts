import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StagingApiComponent } from './staging-api/staging-api.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, StagingApiComponent, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VinylDestinationV1';
}
