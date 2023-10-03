import { Component } from '@angular/core';
import { data } from './data';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent {
 public data = data;
 
}
