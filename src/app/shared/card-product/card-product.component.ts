import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyPipe } from '../pipes/currencyPipe.pipe';
import { TruncatePipe } from '../pipes/truncatePipe.pipe';

@Component({
    selector: 'card-product',
    standalone: true,
    imports: [CommonModule, CurrencyPipe, TruncatePipe],
    templateUrl: './card-product.component.html',
    styleUrl: './card-product.component.css'
  })
  export class CardProductComponent {
    listProduct = [
        {
          name: 'Áo thun nam basic',
          price: 199000,
          description: 'Áo thun chất liệu cotton co giãn 4 chiều, thấm hút mồ hôi tốt.',
          sale: 10, // phần trăm giảm giá
          image: 'https://bizweb.dktcdn.net/100/446/974/products/ao-thun-mlb-new-era-heavy-cotton-new-york-yankees-black-13086578-1.jpg?v=1691318321487'
        },
        {
          name: 'Giày sneaker nữ',
          price: 690000,
          description: 'Giày thể thao năng động phù hợp đi học, đi chơi.',
          sale: 15,
          image: 'https://product.hstatic.net/200000726949/product/juney_brown_900-002-043_main_sq_nt_1200x1200_24ff85bbf4e5493fb7e61a29894de8bb_master.jpg'
        },
        {
          name: 'Balo laptop chống sốc',
          price: 450000,
          description: 'Balo đa năng chống nước, phù hợp để laptop 15.6 inch.',
          sale: 5,
          image: 'https://gubag.vn/wp-content/uploads/2022/05/balo-dung-laptop-cong-so-gubag-gb-bl46-1.jpg'
        },
        {
          name: 'Tai nghe Bluetooth',
          price: 320000,
          description: 'Tai nghe không dây kết nối Bluetooth 5.0, pin 20h.',
          sale: 20,
          image: 'https://soundpeatsvietnam.com/wp-content/uploads/2023/05/gofree.jpg'
        },
        {
          name: 'Bình giữ nhiệt 500ml',
          price: 150000,
          description: 'Bình giữ nhiệt inox 304, giữ nóng/lạnh đến 12 giờ.',
          sale: 0,
          image: 'data:image/jpeg;base64,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'
        }
      ];
      
  }