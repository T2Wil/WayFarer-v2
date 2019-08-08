/* eslint-disable camelcase */
import RegularUser from '../models/RegularUser';
import { generateToken } from '../helpers/util';

export const signupController = (req, res) => {
  const user = new RegularUser();
  const {
    first_name, last_name, is_admin, password, email,
  } = req.body;
  const token = generateToken({ email, is_admin });
  const userParams = {
    email, first_name, last_name, password, is_admin,
  };

  user.signup(userParams);
  const data = user.getUser();
  const { pswd, ...newData } = data;
  newData.token = token;
  res.status(201).json({
    status: res.statusCode,
    message: 'User successfully signed up',
    data: newData,
  });
};

export const signinController = (req, res) => {
  const user = new RegularUser();
  const { email, password } = req.body;
  res.setHeader('content-type', 'application/json');
  user.signin(email, password);
  const data = user.getUser();
  const userEmail = data.email;
  const { is_admin } = data;
  const token = generateToken({ userEmail, is_admin });
  const { pswd, ...newData } = data;
  newData.token = token;
  res.status(200).json({
    status: res.statusCode,
    message: 'Logged in with success',
    newData,
  });
};
