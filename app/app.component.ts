import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  public cities = [{Id: 1, Name: 'Ha Noi'}, {Id: 2, Name: 'HCM'}];
  onSubmit(value:any){
    console.log(value);
  }
}
