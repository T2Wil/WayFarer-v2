/* eslint-disable camelcase */

import User from '../models/User';
// get all trips
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
export const getTrip = () => {

};

// get all trips
// cancel a trip
