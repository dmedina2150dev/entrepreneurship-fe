import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PagesDashModule } from './pages/pages-dash.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    DashboardRoutingModule,
    PagesDashModule,
    SidebarModule,
    SharedModule
  ]
})
export class DashboardModule { }
