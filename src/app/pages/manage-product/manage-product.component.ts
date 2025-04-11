import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/categories.service';
@Component({
  selector: 'app-manage-product',
  imports: [CommonModule, NzButtonModule, NzModalModule, NzInputModule,NzSelectModule, FormsModule],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})

export class ManageProductComponent implements OnInit {

  constructor(private categoryService: CategoryService,private productService: ProductService, private message: NzMessageService) {}
  
  isVisible = false;
  newProduct = {
    name: '',
    price: 0,
    image: '',
    category_id: 0,
  };

  categoryOptions: {label: string, value: number}[] = []

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(res => {
     const converOption = res.map((item) => ({
        label: item.name,
        value: item.id
      }))
      this.categoryOptions = converOption
    })

  }
  resetForm() {
    this.newProduct = {
      name: '',
      price: 0,
      image: '',
      category_id: 0,
    };
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.productService.createProduct(this.newProduct).subscribe({
      next: (res) => {
        this.isVisible = false;
        this.resetForm();
        this.message.success('Tạo sản phẩm thành công!');
      },
      error: (err) => {
        console.error('Tạo thất bại:', err);
        this.message.error('Tạo sản phẩm thất bại!');
      }
    })
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
