import { Directive, ElementRef, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLevelColor]',
  standalone: true
})
export class LevelColorDirective {

  constructor() { }
  elementRef = inject(ElementRef);
  viewContainer = inject(ViewContainerRef);

  

}
