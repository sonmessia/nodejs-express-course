const { CustomApiError } = require('../errors/custom-error');

const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomApiError) {
    console.log(error.message);
    return res.status(error.statusCode).json({ msg: error.message });
  }
  return res.status(500).json({ msg: "Something is wrong, please check again" });
}

module.exports = errorHandlerMiddleware;
