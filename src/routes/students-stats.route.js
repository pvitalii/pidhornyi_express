import { Router } from "express";
import { studentsStatsController } from "../controllers/students-stats.controller.js";
import { isExist } from "../middlewares/is-exist.middleware.js";
import { studentsStatsService } from "../services/students-stats.service.js";

export const studetsStatsRouter = Router();
const prefix = '/students';

studetsStatsRouter
  .get(`${prefix}/worst-homework`, studentsStatsController.getWorstHomework)
  .get(
    `${prefix}/:id`,
    isExist(studentsStatsService.getStudentStatsById.bind(studentsStatsService), 'id'),
    studentsStatsController.getStudentStats);