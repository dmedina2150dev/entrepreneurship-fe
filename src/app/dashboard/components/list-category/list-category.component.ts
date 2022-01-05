import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/products/category';


const ELEMENT_DATA: Category[] = [
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
  {id: '2315AAS' ,name: 'Cebollin', description: 'Hhhhhhhhhhhhh'},
];

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'description'];
  categories = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
