import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  public isLoggedIn:boolean;
  constructor(private loginService: LoginService){

  }

  ngOnInit(){
    this.isLoggedIn = this.loginService.IsLogged();
  }

  Logout(){
    this.loginService.SetLogin(false);
  }

}
