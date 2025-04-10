import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'header-layout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header-layout.component.html',
    styleUrl: './header-layout.component.css'
  })
  export class HeaderLayoutComponent {
    menuList = [
      {
        label: "Bài viết",
        url: "/blog"
      },
      {
        label: "Giới thiệu",
        url: "/introduction"
      },
      {
        label: "Sản phẩm",
        url: "/products"
      },
      {
        label: "Thông tin",
        url: "/info"
      },
      {
        label: "Về chúng tôi",
        url: "/about"
      }
     
    ]
  }