import { ColDef } from 'ag-grid-community';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { tap } from "rxjs";
import {  CartResponseTYPE, CARTTYPE } from "./AllCartsType";
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root',
})

export class AgGridTagService{
    allCarts=signal<CARTTYPE[]>([])
    total=0;
    skip=0;
    limit=30;


  private httpClient = inject(HttpClient)

    getAllCarts(){
        return this.httpClient.get<CartResponseTYPE>('https://dummyjson.com/carts').pipe(
            tap({
                next:(tagsData)=>{
                        this.total=tagsData.total;
                        this.skip=tagsData.skip;
                        this.limit=tagsData.limit;
                        this.allCarts.set(tagsData.carts)   
                }   
            })
        )
    }
    deleteCartById(id:number){
        console.log(id);
        
        return this.httpClient.delete(`https://dummyjson.com/carts/${id}`)
        .pipe( tap({
            next:(data:any)=>{console.log(data);this.allCarts.update(carts=>carts.filter(cart=>cart.id !==id))}
        }))
    }
   
}