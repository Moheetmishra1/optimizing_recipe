// import { CartsService } from './carts.service';
import { Component, DestroyRef, inject, input } from '@angular/core';
import { CartsHeaderComponent } from './carts-header/carts-header.component';
import { CartsNotificationComponent } from './carts-notification/carts-notification.component';
import { CartsTableComponent } from './carts-table/carts-table.component';
import { CartsItemComponent } from './carts-item/carts-item.component';
import { NgFor } from '@angular/common';
import { CartsTotalComponent } from "./carts-total/carts-total.component";
import { CartsService } from './carts.service';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CartsHeaderComponent, CartsNotificationComponent, CartsTableComponent, CartsItemComponent, NgFor, CartsTotalComponent],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  id=input.required<string>()
  cartsService =inject(CartsService);
  allproduct=this.cartsService.myCart

  private destoryRef= inject(DestroyRef)

  ngOnInit(){
    const subscription = this.cartsService.initialCartAdd(this.id())
      .subscribe();
      this.destoryRef.onDestroy(()=>subscription.unsubscribe())
  }
}
