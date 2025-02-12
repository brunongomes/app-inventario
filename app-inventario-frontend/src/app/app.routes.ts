import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
    { path: 'itens', loadComponent: () => import('./components/items/items-list/items-list.component').then(m => m.ItemsListComponent) },
    { path: 'usuarios', loadComponent: () => import('./components/users/users-list/users-list.component').then(m => m.UsersListComponent) }
];
