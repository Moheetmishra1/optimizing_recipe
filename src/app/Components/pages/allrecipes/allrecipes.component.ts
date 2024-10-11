import { Component, DestroyRef, inject } from '@angular/core';
import { RecipeService } from '../home/recipe/recipe.service';
import { RecipesService } from '../home/recipes/recipes.service';
import { AllRecipesService } from './allRecipes.service';
import { InitialRecipeDetailsComponent } from "../../initial-recipe-details/initial-recipe-details.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allrecipes',
  standalone: true,
  imports: [InitialRecipeDetailsComponent,RouterLink],
  templateUrl: './allrecipes.component.html',
  styleUrl: './allrecipes.component.css'
})
export class AllrecipesComponent {

  private allRecipesService= inject(AllRecipesService);
  private destroyRef= inject(DestroyRef)
  recipes = this.allRecipesService.recipes;

  ngOnInit(){
    const subscription = this.allRecipesService.getAllRecipes()
          .subscribe({
            error:(err)=>{
              console.log(err);
            },
            complete:()=>{
              console.log("Completed");
              
            }
          })
          
          this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  moreData(){
    
  }

}
