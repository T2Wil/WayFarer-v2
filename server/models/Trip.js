import Storage from './Storage';
import Utils from '../helpers/util';

class Trip {
  constructor() {
    this.id = null;
    this.seating_capacity = null;
    this.origin = null;
    this.destination = null;
    this.trip_date = null;
    this.fare = null;
    this.storage = new Storage();
    this.utils = new Utils();
  }

  setTrip(trip) {
    this.id = trip.id || this.utils.generateId();
    this.seating_capacity = trip.seating_capcity;
    this.origin = trip.origin;
    this.destination = trip.destination;
    this.trip_date = trip.trip_date;
    this.fare = trip.fare;
  }

  getTrip() {
    return {
      id: this.id,
      seating_capacity: this.seating_capacity,
      origin: this.origin,
      destination: this.destination,
      trip_date: this.trip_date,
      fare: this.fare,
    };
  }

  createTrip(trip) {
    this.setTrip(trip);
    this.storage.addTrip(this.getTrip());
  }

  findTrip(id) {
    const trips = this.storage.getTrips();
    trips.forEach((trip) => {
      if (trip.id === id) {
        console.log(trip);
      }
    });
  }
}

export default Trip;
