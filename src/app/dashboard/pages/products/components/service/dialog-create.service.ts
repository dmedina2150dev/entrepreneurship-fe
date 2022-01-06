import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/core/models/products/category';
import { Product } from 'src/app/core/models/products/product';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { CreateProductComponent } from '../create-product/create-product.component';

@Injectable({
  providedIn: 'root'
})
export class DialogCreateService {

  constructor(private dialog: MatDialog) { }

  dialogProductRef!: MatDialogRef<CreateProductComponent>;
  dialogCategorytRef!: MatDialogRef<CreateCategoryComponent>;

  public openDialogProduct(product?: Product) {
    this.dialogProductRef = this.dialog.open(CreateProductComponent, {
      data: { product: product }
    });
  }

  public openDialogCategory(category?: Category) {
    this.dialogCategorytRef = this.dialog.open(CreateCategoryComponent, {
      data: { category: category }
    });
  }
}
