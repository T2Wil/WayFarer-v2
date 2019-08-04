/* eslint-disable no-undef */
import chai from 'chai';
import Admin from '../models/Admin';
import Storage from '../models/Storage';

const { expect } = chai;
const admin = new Admin();
const storage = new Storage();

const trip = {
  id: 123,
  seating_capacity: 30,
  origin: 'kigali',
  destination: 'kampala',
  trip_date: '01/08/2019',
  fare: 2000,
};
admin.createTrip(trip);
describe('admin createTrip', () => {
  it('should generate trip object', () => {
    expect(admin.trip).to.be.an('object');
  });
  it('should add trip{} to trips[] storage', () => {
    expect(admin.storage.trips).to.have.deep.members([admin.trip]);
  });
});

admin.cancelTrip(trip);
describe('user cancelTrip', () => {
  it('should remove trip from trips storage', () => {
    expect(storage.trips).to.not.have.deep.members([trip]);
  });
});
