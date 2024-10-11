import { Component, inject, input, Input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { USERTYPE } from '../../shared/UserType';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
id= input.required<string>()
user :any;
userDetails:any
private store= inject(Store)
constructor(){
  const user = window.sessionStorage.getItem('user')
  if(user)
  {
    const userDetails= JSON.parse(user);
    this.user= userDetails
  }
}
ngOnInit(){
  this.store.select('login').subscribe((val)=>this.userDetails=val  )
}


}
