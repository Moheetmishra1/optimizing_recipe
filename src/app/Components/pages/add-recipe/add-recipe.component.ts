import { Component, OnInit } from '@angular/core';
import { UpdateRecipeFormComponent } from '../../update-recipe/update-recipe.component';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [UpdateRecipeFormComponent],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

}
