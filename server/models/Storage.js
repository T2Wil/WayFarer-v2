/* eslint-disable camelcase */
class Storage {
  constructor() {
    this.users = [
      {
        id: 1234,
        first_name: 'William',
        last_name: 'ishimwe',
        email: 'ishimwewil005@gmail.com',
        password: '1234',
        is_admin: false,
      },
    ];
    this.trips = [
      {
        id: 123,
        seating_capacity: 30,
        origin: 'kigali',
        destination: 'kampala',
        trip_date: '01/08/2019',
        fare: 2000,
      },
    ];
    this.bookings = [];
  }

  addUser(user) { this.users.push(user); }

  addTrip(trip) { this.trips.push(trip); }

  addBooking(booking) { this.bookings.push(booking); }

  getUsers() { return this.users; }

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
}

export default Storage;
