import { Component } from '@angular/core';
import * as data from '../../data/courses.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_internship_angular_app';
  duration='10 hours';
}
