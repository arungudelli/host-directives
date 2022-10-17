import { Component } from '@angular/core';
import { SizeDirective } from '../size.directive';

@Component({
  selector: 'app-testdirective',
  templateUrl: './testdirective.component.html',
  styleUrls: ['./testdirective.component.scss'],
  hostDirectives:[SizeDirective]
})
export class TestdirectiveComponent {
}
