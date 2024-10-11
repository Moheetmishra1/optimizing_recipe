import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { tap } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TagsTableService{
    tags=signal<string[]>([])

    private httpClient = inject(HttpClient)
  
      recipesByTags(){
          return this.httpClient.get<string[]>('https://dummyjson.com/recipes/tags').pipe(
              tap({
                  next:(tagsData)=>this.tags.set(tagsData)
              })
          )
      }
}