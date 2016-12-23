import {Component} from '@angular/core'

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{ title }}</h2>
    <input type="text" #name />
    <button (click)="OnClick($event)">Click Me</button>
    `
})

export class TutorialComponent{
    public title = "event binding tutorial"

    OnClick(name:any){
        console.log(name)
    }
}