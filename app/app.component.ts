import { Component } from '@angular/core';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{ name | uppercase }}</h1>
  <p>Date today: {{ today | date:'fullDate' | uppercase}}</p>
  <p>Percenr: {{ number | percent: '4.3-5' }}</p>
  <pre>{{ object | json }}</pre>
  <ul>
  <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>
  <p>2 power 10 = {{ 2 |  exponentialStrength:2}}</p>
  <my-tutorial></my-tutorial>`,
})
export class AppComponent  {
  public name = 'AngularJs';
  public today =Date.now();
  public number = 1.34951234;
  public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  public collection: string[] = ['a', 'b', 'c', 'd'];
}
