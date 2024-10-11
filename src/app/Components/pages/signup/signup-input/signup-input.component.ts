import { Component, input } from '@angular/core';

@Component({
  selector: '[signupInput]',
  standalone: true,
  imports: [],
  templateUrl: './signup-input.component.html',
  styleUrl: './signup-input.component.css'
})
export class SignupInputComponent {

  // inputData = input.required<{ for:string,title:string,type:string,formControl:string,id:string}>()
  inputData = input.required<{ for:string}>()
  

}
