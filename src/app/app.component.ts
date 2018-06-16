import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public location = '' ;
  router;

  constructor( private _router: Router) {
    this.location = _router.url;
    this.router = _router;
  }

  
}
