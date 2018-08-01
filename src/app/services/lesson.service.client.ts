export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('https://dhruv-sharma-course-mgmt.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
