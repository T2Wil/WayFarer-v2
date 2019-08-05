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

  getTrips() { return this.trips; }

  getBookings() { return this.bookings; }

  cancelTrip(trip) {
    const tripIndex = this.trips.indexOf(trip);
    this.trips.splice(tripIndex, 1);
  }

  cancelBooking(index_of_booking) {
    this.bookings.splice(index_of_booking, 1);
  }
}

export default Storage;
