import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
let self;
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient) {
    self = this;
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  courseId;
  sectionName = '';
  seats = '';
  sections = [];
  username;
  password;
  loadSections(courseId) {
    this.courseId = courseId;
    return this.sectionService.findSectionsforCourse(courseId)
      .then(sections => this.sections = sections);
  }

  enroll(section) {
    this.sectionService.enrollStudentInSection(section._id)
      .then(() => this.router.navigate(['profile']));
  }

  createSection(sectionName, seats) {
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  edit(section) {
    const name = prompt('Please enter the new section');
    if (name != null) {
      // do something
    }
  }
  delete(section) {
    console.log(section);
    this.sectionService.deleteSection(section)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }
  ngOnInit() {
    this.userService.profile()
      .then(function (response) {
        if (response !== null) {
          self.username = response.username;
          self.password = response.password;
        }
      });
  }

}
