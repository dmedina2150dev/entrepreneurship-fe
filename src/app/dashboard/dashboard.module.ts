import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PagesDashModule } from './pages/pages-dash.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsDashModule } from './components/components-dash.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    DashboardRoutingModule,
    PagesDashModule,
    ComponentsDashModule,
    SharedModule
  ]
})
export class DashboardModule { }
