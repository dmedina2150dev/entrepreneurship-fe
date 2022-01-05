import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { SalesComponent } from './sales/sales.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    InventoryComponent,
    SalesComponent,
    UsersComponent,
    MenuComponent,
    ShoppingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: []
})
export class PagesDashModule { }
