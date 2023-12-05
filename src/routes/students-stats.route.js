import { Router } from "express";
import { studentsStatsController } from "../controllers/students-stats.controller.js";

export const studetsStatsRouter = Router();
const prefix = '/students';

studetsStatsRouter
  .get(prefix, studentsStatsController.getStudentStats)
  .get(`${prefix}/worst-homework`, studentsStatsController.getWorstHomework);