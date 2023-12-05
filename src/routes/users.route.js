import { Router } from 'express';
import { usersController } from '../controllers/users.controller.js';
import { bodyValidator } from '../middlewares/body-validator.middleware.js';
import { patchUsersSchema, createUsersSchema } from '../validation-schemas/users.schema.js'
import { isExist } from '../middlewares/is-exist.middleware.js';
import { usersService } from '../services/users.service.js';
import { isEmailUnique } from '../middlewares/unique-email.middleware.js'

export const userRouter = Router();
const prefix = '/users';

userRouter
  .get(prefix, usersController.getUsers)
  .get(
    `${prefix}/:email`, 
    isExist(usersService.getUserByEmail.bind(usersService), 'email'), 
    usersController.getUserByEmail)
  .post(
    prefix, 
    bodyValidator(createUsersSchema),
    isEmailUnique,
    usersController.addUser)
  .patch(
    `${prefix}/:id`, 
    bodyValidator(patchUsersSchema),
    isExist(usersService.getUserById.bind(usersService), 'id'), 
    isEmailUnique,
    usersController.updateUser)
  .delete(
    `${prefix}/:email`, 
    isExist(usersService.getUserByEmail.bind(usersService), 'email'),
    usersController.deleteUserByEmail);