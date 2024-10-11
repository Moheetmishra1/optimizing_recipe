import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { Store } from '@ngrx/store';
import { USERTYPE } from './shared/UserType';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private store= inject(Store)
  private destroyRef= inject(DestroyRef)
  user= signal<USERTYPE|null>(null)
  
  ngOnInit(){
    const subscription  = this.store.select('login').subscribe((loginData)=>this.user.set(loginData))
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

}
