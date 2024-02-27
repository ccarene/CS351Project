import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';
import awsExports from '../aws-exports';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VinylDestinationV2';
}

export class UseAuthenticatorComponent {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }
}