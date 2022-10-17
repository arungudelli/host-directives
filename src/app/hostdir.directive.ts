import { Directive } from '@angular/core';

@Directive({
  selector: '[appHostdir]',
  host: {'host-dir-attr': '', 'class': 'host-dir', 'style': 'height: 50px;color:red;'},
  standalone: true
})
export class HostdirDirective {
  constructor() { }
}
