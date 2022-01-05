import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'inventories', component: InventoryComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
      { path: 'menu', component: MenuComponent },
      { path: 'shoppings', component: ShoppingComponent },
      { path: 'users', component: UsersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }