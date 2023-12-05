import Joi from 'joi';

export const createUsersSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Password must contain 8 characters, at least 1 letter and 1 number'),
  age: Joi.number().required().min(1),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  tags: Joi.array().items(Joi.string()).required(),
}).options({ abortEarly: false });


export const patchUsersSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Password must contain 8 characters, at least 1 letter and 1 number'),
  age: Joi.number().min(1),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string().required(),
    country: Joi.string().required(),
  }),
  tags: Joi.array().items(Joi.string()),
}).options({ abortEarly: false });