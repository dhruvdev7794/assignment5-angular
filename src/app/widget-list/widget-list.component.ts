import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  widgets = [];
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadWidgets(this.lessonId);
  }

  loadWidgets(lessonId) {
    this.widgetService.findWidgetsforLesson(lessonId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
