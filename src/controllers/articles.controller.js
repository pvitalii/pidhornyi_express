import { StatusCodes } from "http-status-codes";
import { articlesService } from "../services/articles.service.js";

class ArticlesController {
  getArticles(req, res) {
    return res.status(StatusCodes.OK).json(articlesService.getArticles());
  }

  addArticle(req, res) {
    const dto = req.body;
    return res.status(StatusCodes.CREATED).json(articlesService.addArticle(dto));
  }

  updateArticleTags(req, res) {
    const { id } = req.params;
    const { tags } = req.body;
    return res.status(StatusCodes.OK).json(articlesService.updateArticleTags(id, tags));
  }
}

export const articlesController = new ArticlesController();