import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  @Input() images: any[];
  sliderOptions: any = {
    initialSlide: 0,
    autoplay: {
      speed: 200
    }
  };
  ngOnInit(): void {

  }
  getPath(name: string){
    return `/assets/${name}`;
  }
}
