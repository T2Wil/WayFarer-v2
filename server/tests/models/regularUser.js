/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import chai from 'chai';
import RegularUser from '../../model/RegularUser';

const { expect } = chai;
const user = new RegularUser();

const user1 = {
  id: 1234,
  first_name: 'William',
  last_name: 'ishimwe',
  email: 'ishimwewil005@gmail.com',
  password: '1234',
  is_admin: false,
};
user.signup(user1);
describe('user signup()', () => {
  describe('should create user into the storage', () => {
    it(' should generate user id ', () => {
      expect(user.id).to.be.a('number');
    });
    it(' should set user first_name ', () => {
      expect(user.first_name).to.be.a('string');
      expect(user.first_name).to.not.be.empty;
    });
    it(' should set user last_name ', () => {
      expect(user.last_name).to.be.a('string');
      expect(user.last_name).to.not.be.empty;
    });
    it(' should set user email ', () => {
      expect(user.email).to.be.a('string');
      expect(user.email).to.not.be.empty;
    });
    it(' should set is_admin ', () => {
      expect(user.is_admin).to.be.a('boolean');
    });
    it('should create a user object', () => {
      expect(user.getUser()).to.be.an('object');
    });
    it(' should add user to users[]', () => {
      expect(user.storage.users).to.have.deep.members([user1]);
    });
  });
});

user.signin(user1.email, user1.password);
describe('user signin()', () => {
  describe('should set user fields', () => {
    it(' should set user id ', () => {
      expect(user.id).to.be.a('number');
    });
    it(' should set user first_name ', () => {
      expect(user.first_name).to.be.a('string');
      expect(user.first_name).to.not.be.empty;
    });
    it(' should set user last_name ', () => {
      expect(user.last_name).to.be.a('string');
      expect(user.last_name).to.not.be.empty;
    });
    it(' should set user email ', () => {
      expect(user.email).to.be.a('string');
      expect(user.email).to.not.be.empty;
    });
    it(' should set is_admin ', () => {
      expect(user.is_admin).to.be.a('boolean');
    });
    it('should return boolean', () => {
      expect(user.signin(user1)).to.be.a('boolean');
    });
  });
});

const date = new Date();
const nowDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const booking1 = {
  trip_id: 1234567,
  bus_license_number: 'RAB234',
  trip_date: nowDate,
};
user.addBooking(booking1);
describe('user addBooking()', () => {
  it('should generate booking object', () => {
    expect(user.booking).has.to.be.an('object');
  });
  it('should add booking{} into user storage', () => {
    expect(user.booking).to.be.an('object');
    expect(user.bookings).to.be.an('array');
    expect(user.bookings).to.have.deep.members([user.booking.getBooking()]);
  });
  it('should add booking{} to bookings storage', () => {
    expect(user.storage.bookings).to.have.deep.members([user.booking.getBooking()]);
  });
});

const canceled_booking = user.cancelBooking(booking1.trip_id);
describe('user cancelBooking()', () => {
  it('should remove booking from user storage', () => {
    expect(user.bookings).to.not.have.deep.members([canceled_booking]);
  });
  it('should remove booking from bookings storage', () => {
    expect(user.storage.bookings).to.not.have.deep.members([canceled_booking]);
  });
});
