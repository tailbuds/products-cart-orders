exports.get404 = (req, res, next) => {
  res.status(404).send('<h1>Not Found</h1>');
};
