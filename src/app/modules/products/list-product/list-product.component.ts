import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductApiService } from 'src/services/productApi';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  allDataSource!: Product[];

  dataSource = new MatTableDataSource<Product>(this.allDataSource);

  columns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductApiService) {
    this.findAllProducts();
   }

  ngOnInit(): void {}

  findAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        console.log('Fetched products:', products);
        this.dataSource = new MatTableDataSource<Product>(products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    })
  }

  openDeleteModal(productId: number): void {
    console.log('Delete product with ID:', productId);
  }

  openEditModal(product: any): void {
    console.log('Edit product:', product);
  }
  
}
