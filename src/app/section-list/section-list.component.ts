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

  edit(section, type) {
    console.log(type);
    if (type === 'name') {
      const val = prompt('Please enter the new section');
      if (val != null) {
        section.name = val;
        console.log(section);
        const sec = {
          courseId: section.courseId,
          _id: section._id,
          name: section.name,
          seats: section.seats
        };
        this.sectionService.updateSection(sec)
          .then(() => {
            this.loadSections(this.courseId);
          });


      }
    } else {
      const val = prompt('Please enter the seats');
      if (val != null) {
        section.seats = parseInt(val);
        this.sectionService.updateSection(section)
          .then(() => {
            this.loadSections(this.courseId);
          });

      }
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
