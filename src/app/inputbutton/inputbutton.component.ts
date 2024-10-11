import { Component, input, output } from '@angular/core';

@Component({
  selector: '[appInputbutton]',
  standalone: true,
  imports: [],
  templateUrl: './inputbutton.component.html',
  styleUrl: './inputbutton.component.css'
})
export class InputbuttonComponent {
  title=input.required<string>()
  type=input.required<string>()
  placeHolder=input.required<string>()
    // =input.required<string>()
  name=input.required<string>()
  data=output<string>()
}
