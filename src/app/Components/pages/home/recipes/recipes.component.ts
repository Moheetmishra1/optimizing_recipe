import { Component, DestroyRef, inject, input, OnInit, signal, computed } from '@angular/core';
import { RecipesService } from './recipes.service';
import { RECIPESTYPE } from '../../pages-helper';
import { InitialRecipeDetailsComponent } from '../../../initial-recipe-details/initial-recipe-details.component';
import { NavigateWrapperComponent } from '../../../navigate-wrapper/navigate-wrapper.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [InitialRecipeDetailsComponent,NavigateWrapperComponent,RouterLink],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
type= input.required<string>()
name= input.required<string>()
errorMessage=''
isLoading = false
destroyRef= inject(DestroyRef)
recipesService = inject(RecipesService)
recipes=computed(()=>this.recipesService.tags());

ngOnInit(){
  this.isLoading= true;
  this.errorMessage=''
  console.log(this.name(),this.type());
  
  if(this.type()==='tag'){
    const subscription = this.recipesService.recipesBytagName(this.name())
    .subscribe({
      error:(err)=>{
        this.errorMessage=err;
        console.log(err);  
      },
      complete:()=>{
        this.isLoading=false;
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }else if(!(this.type() && this.name())){
    const subscription= this.recipesService.getAllRecipes().subscribe({
      error:(err)=>{
        this.errorMessage=err;
        console.log(err);  
      },
      complete:()=>{
        this.isLoading=false;
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())

  }
  else{
    const subscription= this.recipesService.recipesByMealName(this.name())
    .subscribe({
      error:(err)=>{
        this.errorMessage=err;
        console.log(err);
      },
      complete:()=>{
        this.isLoading=false
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }
}

}

