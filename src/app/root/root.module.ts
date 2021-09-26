import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[RootComponent]
})
export class RootModule { }
