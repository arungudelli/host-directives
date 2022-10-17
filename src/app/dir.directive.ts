import { Directive } from '@angular/core';
import { HostdirDirective } from './hostdir.directive';

@Directive({
  selector: '[appDir]',
  host: {'host-attr': '', 'class': 'dir', 'style': 'width: 50px'},
  hostDirectives: [HostdirDirective]
})
export class DirDirective {

  constructor() { }

}
