import { Component, OnInit } from '@angular/core';

export class Login {
  constructor(
    public email: string,
    public password: string) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    password: ''
  };

  signIn () {
    // console.log(this.login);
    // localStorage.setItem('electron.currentUser', this.login.email);
  }

  constructor() {}

  ngOnInit() {
  }

}
