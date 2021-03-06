export class UserServiceClient {

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByCredentials(username, password) {
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/user/' + username + '/username/' + password + '/password')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findUserByUsername(username) {
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/user/' + username + '/username')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  findUserById(userId) {
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/profile', {
      credentials: 'include'
    })
      .then(response => response.json());
  }
  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  logout() {
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  updateProfile(user) {
    console.log(user);
    return fetch('https://assignment5-wbdv-node.herokuapp.com/api/profile', {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
