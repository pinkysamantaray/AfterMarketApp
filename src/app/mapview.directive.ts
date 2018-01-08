import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appMapview]'
})
export class MapviewDirective {

  constructor(el: ElementRef,
              renderer: Renderer) {
        //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'red'); 
        
  }

}

