import { Component, computed, inject, input, DestroyRef } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts-header',
  standalone: true,
  imports: [],
  templateUrl: './carts-header.component.html',
  styleUrl: './carts-header.component.css'
})
export class CartsHeaderComponent {
  cartId= input.required<string>()
private cartsService = inject(CartsService)
private destroyRef= inject(DestroyRef)
totalType= computed(()=>this.cartsService.myCart().length)

clearCart(){
  
  const subscription = this.cartsService.clearUserCart(+this.cartId()).subscribe()

  this.destroyRef.onDestroy(()=>subscription.unsubscribe())
}
}
