import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateCategoryModule } from '../../components/create-category/create-category.module';
import { CreateProductModule } from '../../components/create-product/create-product.module';
import { ListCategoryModule } from '../../components/list-category/list-category.module';
import { ListProductModule } from '../../components/list-product/list-product.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ListProductModule,
        ListCategoryModule,
        MatFormFieldModule,
        CreateProductModule,
        CreateCategoryModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule
    ],
    exports: [ProductsComponent],
    providers: [],
})
export class ProductsModule {}