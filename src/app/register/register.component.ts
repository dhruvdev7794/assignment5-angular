import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  vpassword;
  register(username, password, vpassword) {
    if (password === vpassword) {
      // call the password service
      this.service.createUser(username, password)
        .then(() => this.router.navigate(['profile']));
    } else {
      alert('Password does not match');
    }
  }

  ngOnInit() {
  }

}
