import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/products/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productData = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    stock: [''],
    description: [''],
    category: [''],
    unit: [''],
    costUnit: [''],
    costSale: [''],
    performance: ['']
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : { product: Product},
    private matDiaglogRef: MatDialogRef<CreateProductComponent>,
    ) { }


  ngOnInit(): void {
  }

}
