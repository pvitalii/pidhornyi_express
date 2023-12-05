import Joi from 'joi';

export const articlesSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  type: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required()
}).options({ abortEarly: false });

export const updateArticlesTagsSchema = Joi.object({
  tags: Joi.array().items(Joi.string()).required()
}).options({ abortEarly: false });