import {Component} from '@angular/core'

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>This is my first Tutorial</h2>
    <h3 [class.redColor]="applyClass">red class</h3>
    <h4 [style.color]="blueColor ? 'blue' : 'orange'">inline style color</h4>
    `,
    styles: [`.redColor{
        color:red
    }`]
})

export class TutorialComponent{
    public applyClass = false;
    public blueColor = true;
}