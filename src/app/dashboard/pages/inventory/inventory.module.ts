import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';

@NgModule({
    declarations: [InventoryComponent],
    imports: [
        CommonModule,
        InventoryRoutingModule
    ],
    exports: [InventoryComponent],
    providers: [],
})
export class InventoryModule {}