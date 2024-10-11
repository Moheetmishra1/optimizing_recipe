import { Component, inject, signal } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { InitialRecipeDetailsComponent } from '../initial-recipe-details/initial-recipe-details.component';
// import { SearchAndAllService } from './searchAll.service';
import { HttpClient } from '@angular/common/http';
import { RECIPESTYPE } from '../pages/pages-helper';
import { RECIPEALLTYPE } from './searchAll.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HomeService } from '../pages/homeService';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-and-all',
  standalone: true,
  imports: [RouterLink,InitialRecipeDetailsComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './search-and-all.component.html',
  styleUrl: './search-and-all.component.css'
})
export class SearchAndAllComponent {

  isLoading=false
  private homeService  = inject(HomeService)
  recipes=this.homeService.addRecipe;
  searchBox:FormControl= new FormControl("")

  constructor(){
    this.searchBox.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query:string)=> this.homeService.searchRecipe(query))
    ).subscribe( )
  }


  

}
