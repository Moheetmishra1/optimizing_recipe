import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { Store } from '@ngrx/store';
import { type USERTYPE } from '../../shared/UserType';
import { AsyncPipe } from '@angular/common';
import {  logoutUser } from '../../Store/login.action';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, LogoComponent, RouterLinkActive,AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  
  constructor(private store:Store<{login:USERTYPE|null}>){ }

  logoutUSer(){
    this.store.dispatch(logoutUser())
  }

}
