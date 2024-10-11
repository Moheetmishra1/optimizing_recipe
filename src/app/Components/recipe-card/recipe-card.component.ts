import { NgStyle } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import {   RouterLink } from '@angular/router';
import { HomeService } from '../pages/homeService';
import { IsAdminDirective } from '../../is-admin.directive';
interface CardRecipeType {
  title:string,
  image:string,
  cuisine:string
  // description:string,
  id:number,
  userId:number,
  difficulty:string

}

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink,NgStyle,IsAdminDirective],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  recipe=input.required<CardRecipeType>()
  homeService= inject(HomeService)
  



  deleteRecipe(){
    this.homeService.deleteRecipe(this.recipe().id)
  }
}
