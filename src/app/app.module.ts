import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //AmplifyAngularModule
  ],
  providers: [AmplifyService]
})
export class AppModule { }
