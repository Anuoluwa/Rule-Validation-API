import validate from "validate.js";
import { ruleRule, dataRule } from "./rule";
import { handleError } from "../helpers/response";
import constants from "../helpers/constants";

const inputValidation = (req, res, next) => {
  const { body } = req;
  const constraints = {
    ...ruleRule,
    ...dataRule
  };
  const validationError = validate(body, constraints, { format: "flat" });

  if (validationError) {
    console.log(validationError);
    return handleError(res, "error", constants.BAD_REQUEST, validationError);
  }

  return next();
};

export default inputValidation;
