import { Component } from '@angular/core';
import { animations } from './common/animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animations]
})
export class AppComponent {
  title = 'app';
}
