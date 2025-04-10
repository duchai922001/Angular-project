import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CardProductComponent } from './shared/card-product/card-product.component';
import { CurrencyPipe } from './shared/pipes/currencyPipe.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, CardProductComponent ,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nameBtn = 'Click me'
  clickMess = ''
  bindingMess = ''
  isActive = false
  handleClickMe(): void {
    this.clickMess = 'Click me success'
  }

  updateField(): void {
    console.log('hello')
  }
}
