import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { ListProductComponent } from './list-product.component';
@NgModule({
    declarations: [ListProductComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [ListProductComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListProductModule {}