export class WidgetServiceClient {
  findWidgetsforLesson(lessonId) {
    return fetch('https://dhruv-sharma-course-mgmt.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
