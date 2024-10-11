import { Component, computed, inject, input } from '@angular/core';
import { getStar } from '../../shared/start';
import { RouterLink } from '@angular/router';
import { HomeService } from '../pages/homeService';
import { IsAdminDirective } from '../../is-admin.directive';

@Component({
  selector: 'app-initial-recipe-details',
  standalone: true,
  imports: [RouterLink,IsAdminDirective],
  templateUrl: './initial-recipe-details.component.html',
  styleUrl: './initial-recipe-details.component.css',
 
})
export class InitialRecipeDetailsComponent {
  details= input.required<{id:number,rating:number,reviewCount:number,name:string,image:string}>()
  star= computed(()=>getStar(this.details().rating))
  private homeService= inject(HomeService)

  deleteRecipe(){
    this.homeService.deleteRecipe(this.details().id)
    console.log("done");
    
  }

  update(){
// this.update(this.details().id)
  }

}
