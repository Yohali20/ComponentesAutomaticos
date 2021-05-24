import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Html5Component } from './html5/html5.component';
import { NarutoComponent } from './naruto/naruto.component';

@NgModule({
  declarations: [
    AppComponent,
    Html5Component,
    NarutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
