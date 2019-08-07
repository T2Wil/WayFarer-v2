
import User from './User';
import Storage from './Storage';

class Admin extends User {
  constructor() {
    super();
    this.trip = {};
    this.storage = new Storage();
  }

  createTrip(trip) {
    this.storage.addTrip(trip);
    this.trip = trip;
  }

  cancelTrip(trip) { this.storage.cancelTrip(trip); }

  viewBookings() { return this.storage.getBookings(); }
}
export default Admin;
