import { Router } from "express";
import { articlesController } from "../controllers/articles.controller.js";
import { bodyValidator } from "../middlewares/body-validator.middleware.js";
import { articlesSchema, updateArticlesTagsSchema } from "../validation-schemas/articles.schema.js";
import { isExist } from "../middlewares/is-exist.middleware.js";
import { articlesService } from "../services/articles.service.js";

export const articlesRouter = Router();
const prefix = '/articles';

articlesRouter
  .get(prefix, articlesController.getArticles)
  .post(
    prefix, 
    bodyValidator(articlesSchema), 
    articlesController.addArticle)
  .patch(
    `${prefix}/:id`, 
    bodyValidator(updateArticlesTagsSchema),
    isExist(articlesService.getArticleById.bind(articlesService), 'id'),
    articlesController.updateArticleTags);