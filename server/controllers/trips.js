/* eslint-disable camelcase */

import User from '../models/User';
import Trip from '../models/Trip';
import Storage from '../models/Storage';

const storage = new Storage();
const trip = new Trip();

//create a trip
export const createTrip = (req, res) => {
  const { decoded } = req;
  const { email } = decoded;
  const { is_admin } = decoded;
  const newTrip = {
    id: req.body.id,
    seating_capacity: req.body.seating_capacity,
    origin: req.body.origin,
    destination: req.body.destination,
    trip_date: req.body.trip_date,
    fare: req.body.fare,
  };
  if(is_admin === 'true'){
      let is_found = storage.findTrip(newTrip.id);
      if(is_found){
        res.status(409).json({
          status: res.statusCode,
          error: 'Conflict : Trip Arleady exists',
          });
      }
    else{
      storage.addTrip(newTrip);
      trip.setTrip(newTrip);
      res.status(201).json({
      status: res.statusCode,
      message: 'Trip created with success',
      data: trip.getTrip()
      });
    }
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
  const { decoded } = req;
  const { email } = decoded;
  const trip_id = req.params.id;

    const tripFound = storage.findTrip(trip_id);
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
};

// get all trips
export const getTrips = (req, res) => {
    const trips = storage.getTrips();
    res.status(200).json({
      status: res.statusCode,
      message: 'Trips retrieved with success',
      data: trips,
    });
 };
 
// cancel a trip
export const cancelTrip = (req,res) =>{
  const { decoded } = req;
  const { is_admin } = decoded;
  let tripId = req.params.id;
  if(is_admin){
    //find trip
    let trip = storage.findTrip(tripId);
    if(trip){
      storage.cancelTrip(trip);
      console.log('here');
      res.status(200).json({
        status: res.statusCode,
        message: 'Trip canceled!',
      });
    }
    else{
      res.status(400).json({
        status: res.statusCode,
        error: 'Trip not available',
      });
    }
    //cancel trip
    }
    else {
      res.status(401).json({
        status: res.statusCode,
        error: 'Unauthorized Access',
      });
    }
}