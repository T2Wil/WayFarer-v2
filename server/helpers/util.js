import jwt from 'jsonwebtoken';

export const generateId = () => Math.floor(Math.random() * 1000);
export const generateToken = (payload) => {
  const SECRET_KEY = 'secret_key';
  return jwt.sign(payload, SECRET_KEY,
    {
      expiresIn: '24h',
    });
};

export const verifyToken = (req, res, next) => {
  const SECRET_KEY = 'secret_key';
  const headerAuth = req.headers.authorization || req.headers.Authorization;
  const token = headerAuth.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({
        status: 'error',
        error: 'Unauthorized Access',
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};
