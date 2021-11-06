import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AuthComponent,
    InventoryComponent,
    SalesComponent,
    UsersComponent,
    MenuComponent,
    ShoppingComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthComponent
  ]
})
export class PagesDashModule { }
