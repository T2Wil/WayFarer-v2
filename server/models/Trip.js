/* eslint-disable radix */
import Storage from './Storage';
import { generateId } from '../helpers/util';

class Trip {
  constructor() {
    this.id = null;
    this.seating_capacity = null;
    this.origin = null;
    this.destination = null;
    this.trip_date = null;
    this.fare = null;
    this.storage = new Storage();
  }

  setTrip(trip) {
    this.id = trip.id || generateId();
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

  findTrip(tripId) {
    const trips = this.storage.getTrips();
    console.log(`Trips : ${JSON.stringify(trips)}`);
    let tripFound = null;
    trips.forEach((trip) => {
      console.log(`trip : ${JSON.stringify(trip.id)}
      tripId : ${tripId}
      type of trip.id ${typeof (trip.id)}
      type of tripId ${typeof (tripId)}`);
      if (trip.id === parseInt(tripId)) {
        console.log('inside');
        tripFound = trip;
      }
    });
    console.log(`tripFound : ${JSON.stringify(tripFound)}`);

    return tripFound;
  }
}

export default Trip;
