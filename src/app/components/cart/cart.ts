import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <section class="page-card">
      <h2>Your Cart</h2>
      <p>Your selected items will appear here.</p>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .page-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    }
  `]
})
export class CartComponent {}
