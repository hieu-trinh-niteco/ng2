import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <h4>angular component</h4>
  <my-tutorial></my-tutorial>`,
  styles: ['h4 {color:blue}']
})
export class AppComponent  { name = 'Angular'; }
