import { StatusCodes } from "http-status-codes";
import { studentsStatsService } from "../services/students-stats.service.js";

class StudentsStatsController {
  getStudentStats(req, res) {
    return res.status(StatusCodes.OK).json(req.data);
  }

  getWorstHomework(req, res) {
    return res.status(StatusCodes.OK).json(studentsStatsService.getWorstHomework());
  }
}

export const studentsStatsController = new StudentsStatsController();
