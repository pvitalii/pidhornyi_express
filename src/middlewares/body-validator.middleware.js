import httpErrors from 'http-errors';

export function bodyValidator(schema) {
  return (req, res, next) => {
    const dataToValidate = req.body;

    const validationResult = schema.validate(dataToValidate);

    if (validationResult.error) {
      const errorMessage = validationResult.error.details.map(d => d.message.replaceAll('"', ''));
      throw httpErrors.BadRequest(errorMessage)
    }

    return next();
  };
}