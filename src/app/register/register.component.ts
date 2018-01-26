import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    userEmail: '',
    username: '',
    password: '',
    confirmPassword: ''
  };
  signUp() {
    // if (this.user.password === this.user.confirmPassword) {
    //
    // }
  }

  constructor() { }

  ngOnInit() {
  }

}
