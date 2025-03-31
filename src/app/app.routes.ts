import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './core/pages/landing/landing.component';

export const routes: Routes = [
    {path:'',redirectTo:'landing',pathMatch : 'full'},
    {path:'landing',component:LandingComponent},
    {path:'**',redirectTo: 'landing', pathMatch : 'full'},
];
