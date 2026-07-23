import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <span>Developed By : Narendra Bhosale</span>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.95rem 1.5rem;
      background: #111827;
      color: #f9fafb;
      text-align: center;
      font-size: 0.95rem;
      box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
    }
  `]
})
export class FooterComponent {}
