import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dish-container',
  standalone: true,
  imports: [],
  templateUrl: './dish-container.component.html',
  styleUrl: './dish-container.component.css'
})
export class DishContainerComponent {
  title= input.required<string>()
  arr=input.required<string[]>()

}
