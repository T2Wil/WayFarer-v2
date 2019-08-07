/* eslint-disable camelcase */

import User from '../models/User';
import Trip from '../models/Trip';
import Storage from '../models/Storage';

export const getTrips = (req, res) => {
  const user = new User();
  const { decoded } = req;
  const { email } = decoded;
  const user_exist = user.matchUserByEmail(email);
  if (user_exist !== null) {
    user.setUser(user_exist);
    const trips = user.storage.getTrips();
    res.status(200).json({
      status: res.statusCode,
      message: 'Trips retrieved with success',
      data: trips,
    });
  } else {
    res.status(500).json({
      status: res.statusCode,
      error: 'internal server error',
    });
  }
};
// get a specific trip
export const getTrip = (req, res) => {
  const user = new User();
  const trip = new Trip();

  const { decoded } = req;
  const { email } = decoded;
  const trip_id = req.params.id;
  const user_exist = user.matchUserByEmail(email);
  console.log(`user exist : ${JSON.stringify(user_exist)}`);
  if (user_exist !== null) {
    user.setUser(user_exist);
    const tripFound = trip.findTrip(trip_id);
    if (tripFound) {
      res.status(200).json({
        status: res.statusCode,
        message: 'Trip retrieved with success',
        data: tripFound,
      });
    } else {
      res.status(400).json({
        status: res.statusCode,
        error: 'Trip not available',
      });
    }
  } else {
    res.status(400).json({
      status: res.statusCode,
      error: 'User not found',
    });
  }
};


// get all trips
// cancel a trip
