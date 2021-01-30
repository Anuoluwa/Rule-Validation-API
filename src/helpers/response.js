import constants from "./constants";

export const handleError = (res,
  message = "Something went wrong",
  status,
  data) => {
  const errorObject = {
    status,
    message,
    data
  };
  res.status(400).json(errorObject).end();
};

export const handleSuccess = (res,
  message = "success",
  status,
  data = {}) => {
  const errorObject = {
    message,
    status,
    data
  };
  return res.status(200).json(errorObject).end();
};
