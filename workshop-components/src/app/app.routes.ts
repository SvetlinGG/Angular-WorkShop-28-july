import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemesListComponent } from './theme/themes-list/themes-list.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},


    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},


    {path: 'themes', component: ThemesListComponent},

    //{path: '**', redirectTo:'/404'},
    {path: '404', component: ErrorComponent},
];
