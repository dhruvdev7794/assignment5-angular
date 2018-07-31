export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSE_ID/section';
  createSection(courseId, name, seats) {
    const section = {
      name: name,
      seats: seats,
      courseId: courseId
    };

    return fetch(this.SECTION_URL.replace('COURSE_ID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findSectionsforCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentFromSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/unenrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  deleteSection(section) {
    const url = 'http://localhost:4000/api/section/' + section._id;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }
}
