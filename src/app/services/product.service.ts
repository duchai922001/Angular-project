import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost/ecom/index.php/api'
  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<{ data: { products: Product[] } }>(`${this.apiUrl}/product/getAll`).pipe(
      map(res => res.data.products) 
    );
  }
  createProduct(data: any): Observable<any> {
    return  this.http.post(`${this.apiUrl}/product/store`, data);
  }
}
