export const handleError = (res,
  message = "Something went wrong",
  status = 503,
  data) => {
  const errorObject = {
    status,
    message,
    data
  };
  return res.status(status).send(errorObject);
};

export const handleSuccess = (res,
  message = "success",
  status = 200,
  data = {}) => {
  const errorObject = {
    message,
    status,
    data
  };
  return res.status(status).send(errorObject);
};
