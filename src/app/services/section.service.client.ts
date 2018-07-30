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
}
