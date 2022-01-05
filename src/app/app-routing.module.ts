import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule) },
      { path: 'register', loadChildren: () => import('./public/pages/register/register.module').then(m => m.RegisterModule) },
      { path: 'login', loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule) },
    ]
  },

  { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
