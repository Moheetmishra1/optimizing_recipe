import { Component, DestroyRef, inject, Input } from '@angular/core';
import { CartProductType, CARTS } from '../carts.model';
import { CartsService } from '../carts.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carts-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './carts-item.component.html',
  styleUrl: './carts-item.component.css'
})
export class CartsItemComponent {
  @Input({required:true}) product !:CartProductType;
  @Input({required:true}) cartId !:string;
  private cartsService= inject(CartsService)
  private destroyRef=inject(DestroyRef)

  deleteCart(){
    console.log("click");
    
     this.cartsService.deleteProduct(this.product.id)
  }

  // ?........................................................

  updateCart(val:string){
    let index= this.cartsService.allCarts().findIndex(a=>a.id===this.product.id)
                    console.log("index is ",index, val);
                    
    // if(  this.cartsService.allCarts()[index].quantity=== 1 && val==='decrease'){
    //     this.cartsService.allCarts.update(carts=> carts.filter(a=> a.id!== this.product.id))
    //     console.log(this.cartsService.allCarts());
        
    // } else{
    let qty= this.product.quantity
    const subscription = this.cartsService.updateCart(+this.cartId, this.product.id,val==='decrease'?qty-1:qty+1)
    .subscribe({
      next:()=>{},
      error:(err)=>{
        console.log(err);
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  // }
}
}


