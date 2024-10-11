import { inject } from '@angular/core';
import {  CanActivateFn, CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';

import { HomeComponent } from './Components/pages/home/home.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { PnFComponent } from './Components/pages/pn-f/pn-f.component';
import { SignUpComponent } from './Components/pages/signup/signup.component';
import { logoutUser } from './Store/login.action';

const gaurdForHome:CanMatchFn=(route,segments)=>{
    console.log(route.path);
    
    console.log("active guard 1 ");
    
     const router = inject(Router)   
     const store = inject(Store)
    let user=null
    // return user? true :new RedirectCommand(router.parseUrl('/login'))

    return true;

    if(route.path===''){
        if(window.localStorage.getItem('token')){
            return true;
        }else{

        }
    }
    //     if(!window.localStorage.getItem('token')){
    //         store.dispatch(logoutUser())
    //         console.log("active guard 2 ");

    //         return new RedirectCommand(router.parseUrl('/login'))
    //     }
    //  store.select('login').subscribe((val)=>{user=val})
    return user? true :new RedirectCommand(router.parseUrl('/login'))
}



export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        canMatch:[gaurdForHome],
        loadChildren:()=>import('./Components/pages/home/home.routes').then(res=>{console.log("import ");
         return  res.HomeRoutes }) ,
    },
   
    {
        path:'login',
        component:LoginComponent
    }, 
     {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'**',
        component:PnFComponent
    },
];
