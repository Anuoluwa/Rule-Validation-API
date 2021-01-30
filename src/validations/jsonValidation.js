import validationSchema from "../../validationSchema";
import constants from "../helpers/constants";
import { handleError } from "../helpers/response";

const { validate } = require("jsonschema");

const jsonValidation = async (req, res, next) => {
  try {
    if (req.headers["content-type"] !== "application/json") {
      return handleError(res, "Invalid JSON payload passed.", constants.BAD_REQUEST, null);
    }
    const result = validate(req.body, validationSchema);
    if (!result.valid) {
      result.errors.map((error) => {
        if (error.stack.includes("requires property")) {
          return handleError(res, `${error.argument} is required.`, constants.BAD_REQUEST, null);
        }
        if (error.stack.includes("is not of a type(s) string")) {
          return handleError(res, `${error.path[1]} should be a string.`, constants.BAD_REQUEST, null);
        }
        if (error.stack.includes("is not of a type(s) integer")) {
          return handleError(res, `${error.path[1]} should be an integer.`, constants.BAD_REQUEST, null);
        }
        if (error.stack.includes("instance.data is not of a type(s) object,array,string")) {
          return handleError(res, `${error.path[0]} should be an object.`, constants.BAD_REQUEST, null);
        }
        if (error.stack.includes("instance.rule is not of a type(s) object")) {
          return handleError(res, `${error.path[0]} should be an object.`, constants.BAD_REQUEST, null);
        }
      });
    }
    return next();
  } catch (err) {
    console.log(err);
  }
};

export default jsonValidation;
