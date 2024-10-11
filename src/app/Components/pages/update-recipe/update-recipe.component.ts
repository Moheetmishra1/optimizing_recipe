import { Component, DestroyRef, inject, input } from '@angular/core';
import { UpdateRecipeFormComponent } from "../../../Components/update-recipe/update-recipe.component";
import { HomeService } from '../../../Components/pages/homeService';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [UpdateRecipeFormComponent],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent {
  id= input.required<string>()
  isLoading= false
  private homeService = inject(HomeService)
  private destroyRef= inject(DestroyRef);
  recipe=this.homeService.recipe;

  ngOnInit(){
this.isLoading=true;

    const subscription = this.homeService.getSingleRecipe(this.id())
          .subscribe({
            next:(data)=>this.recipe,
            
            error:(err)=>console.log(err),
            complete:()=>this.isLoading=false
          });
          this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }

  
}
