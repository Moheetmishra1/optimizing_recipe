import { HomeService } from './../pages/homeService';
// recipe-form.component.ts
import { Component, inject, input, output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RECIPESTYPE } from '../pages/pages-helper';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'update-recipe-form',
  templateUrl: 'update-recipe.component.html',
  styleUrls: ['update-recipe.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,RouterLink],
 
})
export class UpdateRecipeFormComponent  {
  dataPass= input<any>()
  // hideForm= output<void>()
  title=input<string>('')
  private homeService= inject(HomeService)
  private router= inject(Router)
  
    recipeForm:any = new FormGroup({
      name: new FormControl(this.dataPass()?.name, Validators.required),
      caloriesPerServing: new FormControl(this.dataPass()?.caloriesPerServing, Validators.required),
      cookTimeMinutes: new FormControl(this.dataPass()?.cookTimeMinutes, Validators.required),
      cuisine: new FormControl(this.dataPass()?.cuisine, Validators.required),
      difficulty: new FormControl(this.dataPass()?.difficulty, Validators.required),
      id: new FormControl(this.dataPass()?.id),
      image: new FormControl(this.dataPass()?.image, Validators.required),
      ingredients: new FormControl(this.dataPass()?.ingredients, Validators.required),
      instructions: new FormControl(this.dataPass()?.instructions, Validators.required),
      mealType: new FormControl(this.dataPass()?.mealType, Validators.required),
      prepTimeMinutes: new FormControl(this.dataPass()?.prepTimeMinutes, Validators.required),
      rating: new FormControl(this.dataPass()?.rating, Validators.required),
      reviewCount: new FormControl(this.dataPass()?.reviewCount, Validators.required),
      servings: new FormControl(this.dataPass()?.servings, Validators.required),
      tags: new FormControl(this.dataPass()?.tags, Validators.required),
      userId: new FormControl(this.dataPass()?.userId, Validators.required)
    });

    ngOnInit(){
    console.log("enter");
      
      if(this.dataPass()){
      // const obj = {...this.dataPass()}
        
      this.recipeForm.setValue(this.dataPass())
      }  
      console.log(this.dataPass);
      
    }
  

  onSubmit(): void {
    console.log("call1");
    
    if(this.title().includes('update')){
      console.log("enter");
      
    console.log(this.recipeForm.value);
    if(this.recipeForm.valid){
    const obj ={...this.dataPass(),...this.recipeForm.value}
    this.homeService.updateRecipe(obj)
    console.log("Updated");
    
    this.router.navigate(['/'])


    }}
    else{
      
      if(this.recipeForm.valid){
        
        const rands= Math.floor(Math.random()*1000)
       const obj ={...this.recipeForm.value,id:rands,tags:[this.recipeForm.value.tags]}
        
        
      this.homeService.addRecipe(obj);

      this.router.navigate(['/'])
      }
    }
  }
  formHide(){
    // this.hideForm.emit()
  }
}