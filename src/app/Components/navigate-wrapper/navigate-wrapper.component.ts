import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigate-wrapper',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigate-wrapper.component.html',
  styleUrl: './navigate-wrapper.component.css'
})
export class NavigateWrapperComponent {
url= input.required<string>()
}
