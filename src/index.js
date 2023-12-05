import Express, { json } from "express";
import { appRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { logger } from "./middlewares/logger.middleware.js";

export const app = Express();
const port = 3000;

app.use(json());

app.use(logger);
app.use(appRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
})