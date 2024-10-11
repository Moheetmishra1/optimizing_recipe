import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UserDetailsComponent } from '../../user-details/user-details.component';
import { AgTagTableComponent } from '../../ag-tag-table/ag-tag-table.component';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { logoutUser } from '../../../Store/login.action';

const loginGaurd:CanMatchFn=(route,segments)=>{
    console.log("match gaurd");
    
    const store= inject(Store)
    const router = inject(Router)   
    const token= window.localStorage.getItem('token');
    if(token){
        return true;
    }
    store.dispatch(logoutUser())
    return new RedirectCommand(router.parseUrl('/login'))
}

export const HomeRoutes:Routes= [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
    },
    {
        path:'home',
        loadComponent:()=>import('./main-home/main-home.component').then(res=>res.MainHomeComponent),
        canMatch:[loginGaurd]

    },
    {
        path:'update/:id',
        loadComponent:()=>import('../update-recipe/update-recipe.component').then(res=>res.UpdateRecipeComponent),
        canMatch:[loginGaurd]

    },
    {
        path:'addRecipe',
        component:AddRecipeComponent,
        canMatch:[loginGaurd]
        
    },
    {
            path:'allrecipes',
            loadComponent:()=>import('../allrecipes/allrecipes.component').then(res=>res.AllrecipesComponent),
        canMatch:[loginGaurd]

    },
    {
        path:'recipe/:id',
        component:RecipeComponent,
        canMatch:[loginGaurd]
        
    },
    {
        path:'recipes/:type/:name',
        component:RecipesComponent,
        canMatch:[loginGaurd]


    },
    {
        path:'user/:id',
        component:UserDetailsComponent,
        canMatch:[loginGaurd]

    },
    {
        path:'carts/:id',
        loadComponent:()=>import('../../carts/carts.component').then(res=>res.CartsComponent),
        canMatch:[loginGaurd]

    }
    ,{
        path:'agGrid',
        component:AgTagTableComponent,
        canMatch:[loginGaurd]

        // loadChildren:()=>import('../../ag-tag-table/ag-tag-table.component').then(res=>res.AgTagTableComponent)
    }
    
]