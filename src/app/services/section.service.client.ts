export class SectionServiceClient {

  SECTION_URL = 'https://assignment5-wbdv-node.herokuapp.com/api/course/COURSE_ID/section';
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

  updateSection(section) {
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/section/' + section._id;
    return fetch(url, {
      method: 'put',
      credentials: 'include',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findEnrollment(sectionId) {
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  unenrollStudentFromSection(enrollment) {
    const sectionId = enrollment[0].sectionId;
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/section/' + sectionId + '/unenrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include',
    });
  }

  deleteSection(section) {
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/section/' + section._id;
    return fetch(url, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  getSectionById(sectionId) {
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/section/' + sectionId;
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }

  findSectionsForStudent() {
    const url = 'https://assignment5-wbdv-node.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }
}
