import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {

  getUser() {
    return localStorage.getItem(JSON.parse('electron.currentUser'));
  }
  setUser(newUser) {
    return localStorage.setItem('electron.currentUser', JSON.stringify(newUser));
  }

  constructor() { }

}
