import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestdirectiveComponent } from './testdirective/testdirective.component';
import { DirDirective } from './dir.directive';
import { StyleDirective } from './style.directive';
// import { RedColorDirective } from './red-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestdirectiveComponent,
    DirDirective,
    StyleDirective,
    // RedColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
