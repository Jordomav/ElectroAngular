import { Component, OnInit } from '@angular/core';

import { UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ElectroAngular';
  desc = 'Build great native desktop apps with Angular';
  user = '';
  constructor(private userService: UserService) { }

  getUser(): void {
    this.user = this.userService.getUser().firstName;
  }

  ngOnInit() {
    this.getUser();
  }

}
