import Storage from './Storage';

class Booking {
  constructor() {
    this.trip_id = null;
    this.bus_license_number = null;
    this.date = null;
    this.first_name = null;
    this.last_name = null;
    this.user_email = null;
    this.storage = new Storage();
  }

  setBooking(user, booking) {
    this.trip_id = booking.trip_id;
    this.bus_license_number = booking.bus_license_number;
    this.date = booking.date;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.user_email = user.user_email;
  }

  getBooking() {
    return {
      id: this.trip_id,
      bus_license_number: this.bus_license_number,
      date: this.date,
      first_name: this.first_name,
      last_name: this.last_name,
      user_email: this.user_email,
    };
  }

  createBooking(user, booking) {
    this.setBooking(user, booking);
  }
}

export default Booking;
