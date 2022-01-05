import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListCategoryComponent } from './list-category.component';

@NgModule({
    declarations: [ListCategoryComponent],
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [ListCategoryComponent],
    providers: [],
})
export class ListCategoryModule {}