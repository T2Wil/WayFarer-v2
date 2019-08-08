/* eslint-disable camelcase */

import User from '../models/User';
import Trip from '../models/Trip';
import Storage from '../models/Storage';


//create a trip
export const createTrip = (req, res) => {
  const trip = new Trip();
  const { decoded } = req;
  const { email } = decoded;
  const { is_admin } = decoded;
  if(is_admin === 'true'){
    const newTrip = {
      id: req.body.id,
      seating_capacity: req.body.seating_capacity,
      origin: req.body.origin,
      destination: req.body.destination,
      trip_date: req.body.trip_date,
      fare: req.body.fare,
    }
    trip.createTrip(newTrip);
    res.status(201).json({
    status: res.statusCode,
    message: 'Trip created with success',
    data: trip.getTrip(),
    });
  }
  else 
      {
    res.status(401).json({
      status: res.statusCode,
      error: 'Unauthorized Access',
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
