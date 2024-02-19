export const timeoutMiddleware = (req, res, next) => {
  if (req.query.timeout) {
    const timeoutDuration = parseInt(req.query.timeout, 10);
    setTimeout(() => {
      return next();
    }, timeoutDuration);
  } else {
    return next();
  }
};
