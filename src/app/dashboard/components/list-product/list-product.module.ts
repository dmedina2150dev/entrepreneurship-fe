import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListProductComponent } from './list-product.component';

@NgModule({
    declarations: [ListProductComponent],
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [ListProductComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListProductModule {}