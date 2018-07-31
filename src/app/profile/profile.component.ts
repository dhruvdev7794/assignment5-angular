import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
let self;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router,
              private sectionService: SectionServiceClient,
              private service: UserServiceClient) {
    self = this;
  }

  sections = [];
  username = '';
  firstName = '';
  lastName = '';
  email = '';

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
      });

    this.sectionService.findSectionsForStudent()
      .then(sections => this.sections = sections);
  }

  unenroll(section) {
    console.log(section);
    this.sectionService.unenrollStudentFromSection(section.sectionId._id)
      .then(function () {
        return self.sectionService.findSectionsForStudent();
      })
      .then(sections => this.sections = sections);
  }

  update() {
    this.user.username = this.username;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.service.updateProfile(this.user)
      .then(function (response) {
        console.log(response);
      });
  }

  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['login']));
  }

}
