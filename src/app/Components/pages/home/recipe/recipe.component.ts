import { images } from './../../../../assets/login-images/images';
import { RecipeService } from './recipe.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { RECIPEDETAILS } from './RecipeDetails.model';
 
@Component({
  selector: 'app-recipe',
  imports:[CommonModule,NgFor,NgIf],
  standalone:true,
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id= input.required<string>()
  isLoading = false;
  
  private destroyRef= inject(DestroyRef)
  private recipeService  = inject(RecipeService);
  recipe= computed(()=>this.recipeService.recipe())
  data=this.recipeService.recipe()?.ingredients
  ngOnInit(){
    this.isLoading= true
    const subscription = this.recipeService.getRecipe(+this.id())
    .subscribe({
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.isLoading=false;
        this.data=this.recipeService.recipe()?.ingredients
        
        
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  
  }

onClick(s:string){
  if(s==='ingredient'){
    this.data=this.recipe()?.ingredients
  }else{
    this.data= this.recipe()?.instructions
  }
}
  

}