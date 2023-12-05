import createHttpError from "http-errors";

export function isExist(searchMethod, searchField) {
  return function (req, res, next) {
    const document = searchMethod(req.params[searchField]);
    if(!document) {
      throw createHttpError.NotFound('Resource was not found');
    }

    req.data = document;
    return next();
  }
}