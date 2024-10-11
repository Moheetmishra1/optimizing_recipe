import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupInputComponent } from "../pages/signup/signup-input/signup-input.component";
import { EUPField } from './ssInputFiels';

@Component({
  selector: 'app-ss',
  standalone: true,
  imports: [ReactiveFormsModule, SignupInputComponent],
  templateUrl: './ss.component.html',
  styleUrl: './ss.component.css'
})
export class SsComponent  {
signData:any= EUPField
error=" "
  signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9_]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6) , Validators.maxLength(15)  ]),
      name: new FormGroup({
        firstname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+')]),
        lastname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+')])
      }),
      gender:new FormControl('', 
        [Validators.required]
      ),
      
      image: new FormControl('', Validators.required)
    });

  onSubmit(): void {
    this.error=''
   
    console.log(this.signUpForm.invalid);

    
    let {email,username,password,name,gender,image}= this.signUpForm.value
    if(!(email || username || name?.firstname || name?.lastname ||  password || gender || image)){
      this.error="All field are required."
      return;
    }
    if(this.signUpForm.controls.username.invalid){
      this.error='UserName is invalid.(length 6-15)';
      return;
    }
    if(this.signUpForm.controls.password.invalid){
      this.error='PAssword is invalid.(length must be in between 6-15).';
      return;
    }
    if(this.signUpForm.controls.name.invalid){
      this.error='Name is invalid';
      return;
    }
    if(this.signUpForm.controls.gender.invalid){
      this.error='Gender is invalid';
      return;
    }
   
 
    if(this.signUpForm.invalid){
      this.error="Form is invalid.Please check all field."
    }else{
      console.log(this.signUpForm.valid);
      
    }
  }
}
