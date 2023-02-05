import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[compAnchor]'
})
export class CompAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
