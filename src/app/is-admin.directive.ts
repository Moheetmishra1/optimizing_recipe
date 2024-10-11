import { DestroyRef, Directive, effect, inject, signal, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { USERTYPE } from './shared/UserType';

@Directive({
  selector: '[appIsAdmin]',
  standalone: true
})
export class IsAdminDirective {

  private store= inject(Store)
  private destroyRef= inject(DestroyRef)
  user =signal<USERTYPE|null>(null)
  private templateRef= inject(TemplateRef)
  private viewContainerRef=  inject(ViewContainerRef)

username= 'michaelw';
password="michaelwpass"
  ngOnInit(){
    const subscription = this.store.select('login').subscribe((val)=>{
      
      if(val){
        if(val.username === 'michaelw'){          
          this.viewContainerRef.createEmbeddedView(this.templateRef)
        }else{
          
         this.viewContainerRef.clear()
        }
      }
    })
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())
  }



}
