import { Router } from "express";
import { userRouter } from "./users.route.js";
import { studetsStatsRouter } from "./students-stats.route.js";
import { articlesRouter } from "./articles.route.js";

export const appRouter = Router();

appRouter
  .use(userRouter)
  .use(studetsStatsRouter)
  .use(articlesRouter);