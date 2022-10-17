import { Directive } from '@angular/core';
import { HeightDirective } from './height.directive';

@Directive({
  selector: '[appWidth]',
  host:{'style': 'width:500px;'},
  hostDirectives:[HeightDirective],
  standalone: true
})
export class WidthDirective {

  constructor() { }

}
