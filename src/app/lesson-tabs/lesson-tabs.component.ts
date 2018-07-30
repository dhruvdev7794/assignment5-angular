import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadLessons(params['moduleId']))
  }

  moduleId;
  lessons = [];

  loadLessons(moduleId) {
    this.moduleId = moduleId;
    console.log(moduleId);
    this.service.findLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);
  }
  ngOnInit() {

  }

}
