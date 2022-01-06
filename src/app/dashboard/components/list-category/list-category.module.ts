import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { ListCategoryComponent } from './list-category.component';
@NgModule({
    declarations: [ListCategoryComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [ListCategoryComponent],
    providers: [],
})
export class ListCategoryModule {}