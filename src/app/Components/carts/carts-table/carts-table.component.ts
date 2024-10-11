import { Component, computed, inject } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts-table',
  standalone: true,
  imports: [],
  templateUrl: './carts-table.component.html',
  styleUrl: './carts-table.component.css'
})
export class CartsTableComponent {
  cartsService= inject(CartsService)

  get totalItem() {
    return this.cartsService.totalItem()
  }
}
