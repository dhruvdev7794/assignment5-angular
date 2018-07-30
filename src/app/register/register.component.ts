import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
let self;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
    self = this;
  }

  username;
  password;
  vpassword;
  register(username, password, vpassword) {
    if (password === vpassword) {
      // call the password service
      this.service.findUserByUsername(username)
        .then(function (user) {
          console.log(user);
          if (user === null) {
             self.service.createUser(username, password)
              .then(() => self.router.navigate(['profile']));
          }
        });
    } else {
      alert('Password does not match');
    }
  }

  ngOnInit() {
  }

}
