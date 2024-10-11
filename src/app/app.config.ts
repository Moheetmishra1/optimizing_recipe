import { StoreDevtoolsOptions } from './../../node_modules/@ngrx/store-devtools/src/config.d';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { userReducer } from './Store/login.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }) , provideRouter(routes,withComponentInputBinding(),withRouterConfig({
    paramsInheritanceStrategy:'always'
  })), provideHttpClient(), provideStore({
        login: userReducer
    }), provideEffects(),
  
    provideStoreDevtools({ name: 'nba-app', maxAge:30 ,  trace: true,  connectInZone: true })
  ]
};
