import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
let self;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.service.findUserByCredentials(username, password)
      .then(function (user) {
        if (user === null) {
          alert('invalid credentials');
        } else {
          self.service.login(username, password)
            .then(() => self.router.navigate( ['profile']));
        }
      });

  }

  constructor(private router: Router, private service: UserServiceClient) {
    self = this;
  }

  ngOnInit() {
  }

}
