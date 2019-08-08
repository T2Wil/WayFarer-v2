import Joi from 'joi';

export const validateSignup = (req, res, next) => {
  const schema = Joi.object().keys({
    first_name: Joi.string().alphanum().min(3).max(25)
      .required(),
    last_name: Joi.string().alphanum().min(3).max(25)
      .required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    is_admin: Joi.boolean().required(),
  });
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    res.status(400).json({
      status: 'error',
      error: 'Invalid parameters',
    });
  } else { next(); }
};

export const validateSignin = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    token: Joi.string(),
  });
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  } else next();
};
