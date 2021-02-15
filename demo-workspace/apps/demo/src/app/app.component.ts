import { Component } from '@angular/core';

@Component({
  selector: 'demo-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  animals: string[] = ["mountain1.jpeg", "mountain2.jpeg","mountain3.jpeg","mountain4.jpeg"]
}
