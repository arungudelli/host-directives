import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';
import { FontBoldDirective } from './font-bold.directive';
import { HeightDirective } from './height.directive';
import { RedColorDirective } from './red-color.directive';
import { WidthDirective } from './width.directive';

@Directive({
  selector: '[appStyle]',
  hostDirectives:[RedColorDirective,FontBoldDirective,HeightDirective,WidthDirective,BorderDirective]
})
export class StyleDirective {

  constructor() { }

}
