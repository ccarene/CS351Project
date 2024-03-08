import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { VinylViewComponent } from './vinyl-view/vinyl-view.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent },
    {path: 'login', component: LoginComponent},
    {path: 'view', component: VinylViewComponent}
];
