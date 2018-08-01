export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://dhruv-sharma-course-mgmt.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesforCourses(courseId) {
    return fetch('https://dhruv-sharma-course-mgmt.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
