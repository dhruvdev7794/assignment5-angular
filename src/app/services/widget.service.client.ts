export class WidgetServiceClient {
  findWidgetsforLesson(lessonId) {
    return fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
