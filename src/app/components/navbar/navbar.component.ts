import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // ✅ sửa styleUrl thành styleUrls
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
  menuList = [
    { label: 'Bài viết', url: '/blog' },
    { label: 'Giới thiệu', url: '/introduction' },
    { label: 'Thêm sản phẩm', url: '/add-product' },
    { label: 'Thông tin', url: '/info' },
    { label: 'Về chúng tôi', url: '/about' }
  ];
}
