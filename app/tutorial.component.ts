import {Component} from '@angular/core'

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{ title }}</h2>
    <input type="text" [(ngModel)]="fname" />
    <input type="text" [(ngModel)]="lname" />
    <br/>
    Fullname: {{ fname }} {{ lname }}
    `
})

export class TutorialComponent{
    public title = "event binding tutorial"
}