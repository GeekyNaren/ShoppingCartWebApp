import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="top-nav">
      <a class="brand" routerLink="/products">Shopping Cart</a>
      <div class="nav-links">
        <a routerLink="/products" routerLinkActive="active">Products</a>
        <a routerLink="/cart" routerLinkActive="active">Cart</a>
        <a routerLink="/login" routerLinkActive="active">Login</a>
        <a routerLink="/register" routerLinkActive="active">Register</a>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }

    .top-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: linear-gradient(90deg, #1d4ed8, #2563eb);
      color: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      text-decoration: none;
      letter-spacing: 0.04em;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.35rem 0.6rem;
      border-radius: 999px;
      transition: background-color 0.2s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class HeaderComponent {}
