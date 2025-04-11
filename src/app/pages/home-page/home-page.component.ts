import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '../../shared/pipes/currencyPipe.pipe';
import { TruncatePipe } from '../../shared/pipes/truncatePipe.pipe';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, CurrencyPipe, TruncatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  products: Product[] = []
  constructor(private productService: ProductService) {}
 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res
    })
  }
}
