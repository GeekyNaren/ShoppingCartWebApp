import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart';
import { LoginComponent } from './components/login/login';
import { ProductsComponent } from './components/products/products';
import { RegisterComponent } from './components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'products' }
];
