import { images } from './../assets/login-images/images';
import { Component, computed, inject, input, output, signal } from '@angular/core';
import { LogoComponent } from '../Components/logo/logo.component';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { USERTYPE } from '../shared/UserType';
import { logoutUser } from '../Store/login.action';
import { IsAdminDirective } from '../is-admin.directive';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [LogoComponent,RouterLink,NgIf,AsyncPipe,IsAdminDirective],
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.css'
})
export class HomeNavbarComponent {
  isVisibile=signal<boolean>(false);
  imagepath=''

  refresheLogout= computed(()=>{
    const token = window.localStorage.getItem('token')
    if(token){
      return ""
    }else{
      return this.logout()
    }
  })
  userAll:any
  id=0
  user$ =signal<Observable<USERTYPE | null>|undefined>(undefined)
  constructor(private store:Store<{login:USERTYPE|null}>,private router:Router){
    this.user$.set(this.store.select('login'))
    this.user$()?.subscribe((val)=>{
      if(val){
        this.id=val.id;
        this.imagepath=val?.image
      }

    })
  }

  OnVisible(){
    
    this.isVisibile.update((val)=>!val)
  }

  logout(){
    this.store.dispatch(logoutUser())
    window.sessionStorage.clear()
    window.localStorage.clear()
    this.router.navigate(['login'])
    return ""
  }
}
