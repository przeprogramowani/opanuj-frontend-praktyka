export const forceErrorMiddleware = (req, res, next) => {
  if (req.query.error) {
    return res.status(500).send('An error occured');
  }
  return next();
};
