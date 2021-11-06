import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
