import { Component, OnInit } from '@angular/core';
import { DialogCreateService } from '../../components/service/dialog-create.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _dialogCreate: DialogCreateService
  ) { }

  ngOnInit(): void {
  }

  createdProduct() {
    this._dialogCreate.openDialogProduct();
  }

}
