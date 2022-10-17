import { Directive } from '@angular/core';
import { WidthDirective } from './width.directive';

@Directive({
  selector: '[appSize]',
  standalone: true,
  hostDirectives:[WidthDirective]
})
export class SizeDirective {

  constructor() { }

}
