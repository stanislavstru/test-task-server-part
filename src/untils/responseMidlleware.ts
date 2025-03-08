export const responseWrapper = (req, res, next) => {
  if (req.path.startsWith('/swagger')) {
    return next();
  }

  const oldJson = res.json;

  res.json = function (data) {
    oldJson.call(this, {
      response: data,
      error: null,
    });
  };

  next();
};

export const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    response: null,
    error: err.message || 'Internal Server Error',
  });
};
