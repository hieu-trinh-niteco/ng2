import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <img [src]="image">
  <my-tutorial></my-tutorial>
  <input type="text" [value]="wellcome" />`,
})
export class AppComponent  {
  public name = 'AngularJs';

  //property binding
  public image = "http://lorempixel.com/300/300"

  public wellcome = "Wellcome to my angular"
}
