import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-image',
  standalone: true,
  imports: [],
  templateUrl: './category-image.component.html',
  styleUrl: './category-image.component.css',
  host:{
    '(click)':'onClick()'
  }
})
export class CategoryImageComponent {
@Input({required:true}) obj !:{cuisine:string,image:string}
router= inject(Router)

onClick(){
  console.log("enter");
  
  this.router.navigate(['/recipes/tag/',this.obj.cuisine])
}


}
