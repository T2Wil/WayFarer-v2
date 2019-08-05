/* eslint-disable camelcase */
import Storage from './Storage';
import utils from '../helpers/util';

class User {
  constructor() {
    this.id = null;
    this.first_name = null;
    this.last_name = null;
    this.email = null;
    this.password = null;
    this.is_admin = null;
    this.storage = new Storage();
    this.token = null;
  }

  setUser({
    id = utils.generateId, email, first_name, last_name, password, is_admin,
  }) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.password = password;
    this.is_admin = is_admin;
  }

  getUser() {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      is_admin: this.is_admin,
      password: this.password,
    };
  }

  signup(user) {
    this.setUser(user);
    this.storage.addUser(this.getUser());
  }

  matchUser(email, password) {
    const users = this.storage.getUsers();
    const numberOfUsers = users.length;
    for (let i = 0; i < numberOfUsers; i += 1) {
      if (users[i].email === email) {
        if (users[i].password === password) {
          return users[i];
        }
      }
    }
    return null;
  }

  signin(email, password) {
    const user = this.matchUser(email, password);
    if (user) {
      this.id = user.id;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.email = user.email;
      this.password = user.password;
      this.is_admin = user.is_admin;
      return true;
    }
    return false;
  }

  viewTrips() { return this.storage.getTrips(); }
}

export default User;
