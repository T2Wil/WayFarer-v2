/* eslint-disable camelcase */
import RegularUser from '../models/User';
import { generateToken } from '../helpers/util';
import Storage from '../models/Storage';
import User from '../models/User';

const storage = new Storage();

export const signupController = (req, res) => {
  const {
    first_name, last_name, is_admin, password, email,
  } = req.body;
  const token = generateToken({ email, is_admin });
  const userParams = {
    email, first_name, last_name, password, is_admin,
  };
  let user = storage.findUser(email,password);
  if(!user){
      storage.addUser(userParams);
      const createdUser = storage.getUsers();
      const data = createdUser[createdUser.length - 1] ;
      data.token = token;
      res.status(201).json({
        status: res.statusCode,
        message: 'User successfully signed up',
        data,
      });
  }else{
    res.status(409).json({
      status: res.statusCode,
      err: 'Conflict: User Already exists',
    });
  }
  
};

export const signinController = (req, res) => {
  const { email, password } = req.body;
  res.setHeader('content-type', 'application/json');
  const data = storage.findUser(email,password);
  if(data){
    const userEmail = data.email;
    const { is_admin } = data;
    const token = generateToken({ userEmail, is_admin });
    const { pswd, ...newData } = data;
    newData.token = token;
    res.status(200).json({
      status: res.statusCode,
      message: 'Logged in with success',
      data : newData,
    })
  }
  else {
    res.status(404).json({
      status: res.statusCode,
      error: 'User Not Found',
    })
  }
};
