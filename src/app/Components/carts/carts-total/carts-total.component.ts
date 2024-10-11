import { Component, inject } from '@angular/core';
import { CartsService } from '../carts.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carts-total',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './carts-total.component.html',
  styleUrl: './carts-total.component.css'
})
export class CartsTotalComponent {
  
  cartsService = inject(CartsService)
  total = this.cartsService.total
}
