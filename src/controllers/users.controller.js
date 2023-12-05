import { StatusCodes } from 'http-status-codes';
import { usersService } from '../services/users.service.js';

class UsersController {
  getUsers(req, res) {
    return res.status(StatusCodes.OK).json(usersService.getUsers());
  }

  getUserByEmail(req, res) {
    return res.status(StatusCodes.OK).json(req.data);
  }

  addUser(req, res) {
    const dto = req.body;
    return res.status(StatusCodes.CREATED).json(usersService.addUser(dto));
  }

  updateUser(req, res) {
    const { id } = req.params;
    const dto = req.body;
    return res.status(StatusCodes.OK).json(usersService.updateUser(id, dto));
  }

  deleteUserByEmail(req, res) {
    const { email } = req.params;
    return res.status(StatusCodes.NO_CONTENT).json(usersService.deleteUserByEmail(email));
  }
}

export const usersController = new UsersController();
