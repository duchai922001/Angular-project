import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { ManageProductComponent } from "./pages/manage-product/manage-product.component";


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'blog', component: CartPageComponent },
  { path: 'add-product', component: ManageProductComponent },
];

