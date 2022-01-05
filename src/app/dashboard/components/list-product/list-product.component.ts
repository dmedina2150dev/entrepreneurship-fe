import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products/product';
import { Unit } from 'src/app/core/models/products/unidad';



const ELEMENT_DATA: Product[] = [
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
  {code: '2315AAS' ,name: 'Cebollin', stock: 1.0079, description: 'Hhhhhhhhhhhhh', category: {name: 'Verduras'}, unit: Unit.KILOGRAMOS, costUnit: '1200', costSale: '1200', performance: 100},
];


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[] = ['code','name', 'stock', 'description', 'category', 'unit', 'costUnit', 'costSale', 'performance'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
