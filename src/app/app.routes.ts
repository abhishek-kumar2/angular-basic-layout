import { Routes } from '@angular/router';
import { DefaultLayout } from './core/layouts/default-layout/default-layout';
import { AdminLayout } from './core/layouts/admin-layout/admin-layout';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', loadComponent: () => import('./domains/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'users', loadComponent: () => import('./domains/users/users').then(m => m.Users) },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: '', loadComponent: () => import('./domains/dashboard/dashboard').then(m => m.Dashboard) }
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'login', loadComponent: () => import('./domains/auth/login/login').then(m => m.Login) },
      { path: 'register', loadComponent: () => import('./domains/auth/register/register').then(m => m.Register) }
    ]
  }
];
