/* eslint-disable camelcase */
class Storage {
  constructor() {
    this.users = [];
    this.trips = [];
    this.bookings = [];
  }

  addUser(user) { this.users.push(user); }

  addTrip(trip) { this.trips.push(trip); }

  addBooking(booking) { this.bookings.push(booking); }

  getUsers() { return this.users; }

  findUser(email,password){
    console.log(`users : ${ JSON.stringify(this.users)}`);
    const numberOfUsers = this.users.length;
    for (let i = 0; i < numberOfUsers; i += 1) {
      if (this.users[i].email === email) {
        if (this.users[i].password === password) {
          return this.users[i];
        }
      }
    }
    return null;
  }
  getTrips() { return this.trips; }
  
  getTrip(trip_id) {
    this.trips.find(trip => trip.id === trip_id);
  }

  getBookings() { return this.bookings; }

  cancelTrip(trip) {
    const tripIndex = this.trips.indexOf(trip);
    this.trips.splice(tripIndex, 1);
  }

  cancelBooking(index_of_booking) {
    this.bookings.splice(index_of_booking, 1);
  }

  findTrip(tripId) {
    const numberOfTrips = this.trips.length;

    for (let i = 0; i < numberOfTrips; i += 1) {
       if (this.trips[i].id === tripId) {
        return this.trips[i];
      }
    }
    return false;
  }
  matchUserByEmail(email) {
    const numberOfUsers = this.users.length;
    console.log( `number of users: ${numberOfUsers}`);
    for (let i = 0; i < numberOfUsers; i += 1) {
      if (this.users[i].email === email) {
        return this.users[i];
      }
    }
    return null;
  }
}

export default Storage;
