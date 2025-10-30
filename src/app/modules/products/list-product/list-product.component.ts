import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  dataSource = new MatTableDataSource([
    {id: 1, name: 'Product 1', price: 10},
    {id: 2, name: 'Product 2', price: 20},
    {id: 3, name: 'Product 3', price: 30}
  ]);

  columns: string[] = ['id', 'name', 'price', 'actions'];

  constructor() { }

  ngOnInit(): void {}

  openDeleteModal(productId: number): void {
    console.log('Delete product with ID:', productId);
  }

  openEditModal(product: any): void {
    console.log('Edit product:', product);
  }
  
}
