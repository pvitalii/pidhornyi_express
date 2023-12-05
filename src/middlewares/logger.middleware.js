export function logger(req, res, next) {
  console.log(`[HTTP] ${req.method} ${req.url}`);
  return next();
}