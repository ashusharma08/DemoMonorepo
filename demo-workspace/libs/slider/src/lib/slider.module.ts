import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    BrowserModule,
  ],
  exports: [SliderComponent]
})
export class SliderModule { }
