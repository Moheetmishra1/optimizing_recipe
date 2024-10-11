import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogoComponent } from "../../logo/logo.component";
import { images } from '../../../assets/login-images/images';
import { SsComponent } from "../../ss/ss.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone:true,
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  imports: [LogoComponent, SsComponent,RouterLink]
})
export class SignUpComponent  {
  imagesProperty=images
  index=0
  updateSlide(opt:string){
    if(opt==='prev'){
      if(this.index===0){
          this.index=this.imagesProperty.length-1
        }else{
          this.index -=1
        }
    }else{

      if(this.index >= this.imagesProperty.length-1){
        this.index=0
      }else{
        this.index +=1
      }
    }
  }
  
}