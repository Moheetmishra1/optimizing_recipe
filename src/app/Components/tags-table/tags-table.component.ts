import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { TagsTableService } from './TagsTableService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tags-table.component.html',
  styleUrl: './tags-table.component.css'
})
export class TagsTableComponent implements OnInit {

  
  isLoading:boolean= false;
  hidePrev=true
  hideNext=false
  private tagTableService= inject(TagsTableService);
  private destroyRef= inject(DestroyRef)
  tags=this.tagTableService.tags  ;
  paginatedTag=5

  ngOnInit(){
    const subscription = this.tagTableService.recipesByTags()
    .subscribe( { error:(err)=>{
      console.log(err);          
    },
    complete:()=>{
      console.log('Fetching completed');
      this.isLoading=false
     }
    });
  this.destroyRef.onDestroy(()=>subscription.unsubscribe())

  }

  updateTag(option:string){
    if(option==='inc'){
      this.hidePrev=false
    if(this.paginatedTag<=this.tags().length-5){
      this.paginatedTag+=5
    }else{
      this.paginatedTag=this.tags().length;
      this.hideNext=true
    }
  ``}else{
    this.hideNext=false
    if(this.paginatedTag-5>5){
      this.paginatedTag-=5;
    }else{
      this.paginatedTag=5
      this.hidePrev=true
    }
  }
  }

  search(){

  }
}
