import createHttpError from "http-errors";
import { usersService } from "../services/users.service.js";

export function isEmailUnique(req, res, next) {
  const { email } = req.body;

  if(!email) return next();

  const user = usersService.getUserByEmail(email);
  
  if(user) {
    throw createHttpError.BadRequest('User with this email already exists');
  }

  return next()
}