import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../../homeService';
import { CategoryImageComponent } from '../../../category-image/category-image.component';
import { NgIf } from '@angular/common';
import { DishContainerComponent } from '../../../dish-container/dish-container.component';
import { SearchAndAllComponent } from '../../../search-and-all/search-and-all.component';
import { RecipeCardComponent } from '../../../recipe-card/recipe-card.component';
import { HomeNavbarComponent } from '../../../../home-navbar/home-navbar.component';
import { TagsTableComponent } from "../../../tags-table/tags-table.component";
import { RouterLink } from '@angular/router';
import { NavigateWrapperComponent } from "../../../navigate-wrapper/navigate-wrapper.component";
import { IsAdminDirective } from '../../../../is-admin.directive';



@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [HomeNavbarComponent, CategoryImageComponent, NgIf, DishContainerComponent, SearchAndAllComponent,
     RecipeCardComponent, TagsTableComponent, RouterLink,
      NavigateWrapperComponent,IsAdminDirective],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent implements OnInit {
  isLoading=false;
  private homeService= inject(HomeService)
  recipes =this.homeService.recipes;
  recipesByCuisine:any[]=[];
  recipesByTag:any[]=[]
 private destroyRef=inject(DestroyRef)
 paginatedRecipe=5
 displayForm = false
 id= signal<number>(0)
 dataPass= computed(()=>this.recipes().find(a=>a.id=== this.id()))
//  viewMore =this.recipes().length>this.paginatedRecipe
//  viewLess =this.recipes().length>0

ngOnInit(): void {
  this.isLoading=true
  console.log(this.recipes());
  
  if(!this.homeService.recipes().length){
    
 const subscription =  this.homeService.getAllRecipes()
      .subscribe({
        next:()=>{this.recipesByCuisine=this.homeService.recipesByCuisine();
          this.recipesByTag=Object.entries(this.homeService.recipesByTag())          
        },
        error:(err)=>console.log("Error",err),
        complete:()=> this.isLoading=false
      })
      this.destroyRef.onDestroy(()=>subscription.unsubscribe())
    }{
      // this.recipes
      this.recipesByCuisine=this.homeService.recipesByCuisine();
      this.recipesByTag=Object.entries(this.homeService.recipesByTag())  ;
      this.isLoading=false;

    }
}

increaseRecipe(){
  if(this.paginatedRecipe<=this.recipes().length-5){
    this.paginatedRecipe+=5
  }else{
    this.paginatedRecipe=this.recipes().length
  }
}
openForm(id:number){
  console.log("Enter ",id);
  
   this.displayForm= true;
    this.id.set(id)
}

hideForm(){
  this.displayForm=false
}

}
