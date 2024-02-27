import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { BrowserModule } from '@angular/platform-browser';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AmplifyAuthenticatorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
