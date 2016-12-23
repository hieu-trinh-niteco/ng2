import {Component} from '@angular/core'

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>This is my first Tutorial</h2>
    <h4>angular component</h4>
    `,
    styles: ['h2 {color : red;}','h4 {color:green}']
})

export class TutorialComponent{

}