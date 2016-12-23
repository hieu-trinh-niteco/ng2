import {Component} from '@angular/core'

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{ title }}</h2>
    <h3 *ngIf="showLineIf">This ngIf directive show</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">this is line red</p>
        <p *ngSwitchCase="'blue'" >this is line blue</p>
        <p *ngSwitchCase="'green'" >this is line green</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>

    <ul>
        <li *ngFor="let color of colors">{{ color }}</li>
    </ul>
    `
})

export class TutorialComponent{
    public title = "directive tutorial"
    public showLineIf = true
    public color = "red"
    public colors: string[] = ["red", "green", "blue"]
}