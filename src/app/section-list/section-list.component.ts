import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sectionService: SectionServiceClient) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  courseId;
  sectionName = '';
  seats = '';
  sections = [];
  loadSections(courseId) {
    this.courseId = courseId;
    return this.sectionService.findSectionsforCourse(courseId)
      .then(sections => this.sections = sections);
  }

  enroll(section) {
    // alert(section._id);
    this.sectionService.enrollStudentInSection(section._id)
      .then(() => this.router.navigate['profile']);
  }

  createSection(sectionName, seats) {
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }
  ngOnInit() {
  }

}
