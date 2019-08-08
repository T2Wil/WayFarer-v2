/* eslint-disable camelcase */

import Storage from './Storage';
import User from './User';
import Booking from './Booking';

class RegularUser extends User {
  constructor() {
    super();
    this.bookings = [];
    this.storage = new Storage();
    this.booking = new Booking();
  }

  addBooking({ trip_id, bus_license_number, trip_date }) {
    this.booking.createBooking(this.getUser, { trip_id, bus_license_number, trip_date });
    const created_booking = this.booking.getBooking();
    this.bookings.push(created_booking);
    this.storage.addBooking(created_booking);
  }

  cancelBooking(booking_id) {
    let booking_to_cancel;
    this.bookings.forEach((booking) => {
      if (booking.id === booking_id) {
        booking_to_cancel = booking;
        const index_of_booking = this.bookings.indexOf(booking);
        this.bookings.splice(index_of_booking, 1);
        this.storage.cancelBooking(index_of_booking);
      }
    });
    return booking_to_cancel;
  }

  viewBookings() {
    return this.bookings;
  }
}

export default RegularUser;
