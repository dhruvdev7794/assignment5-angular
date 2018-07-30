import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-navigation',
  templateUrl: './course-navigation.component.html',
  styleUrls: ['./course-navigation.component.css']
})
export class CourseNavigationComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }

  courses = [];
  modules = [];
  ngOnInit() {
    this.service.findAllCourses()
        .then(courses => this.courses = courses);
  }
  selectCourse(courseId) {
    this.service.findAllModulesforCourses(courseId)
      .then(modules => this.modules = modules);
  }

}
