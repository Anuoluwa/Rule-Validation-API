import { handleError } from "../helpers/response";
import constants from "../helpers/constants";

const inputValidation = (req, res, next) => {
  if (!req.body.rule) {
    return handleError(res, "rule is required.", constants.BAD_REQUEST, null);
  }
  //   if (!(JSON.parse(req.body.rule))) {
  //     return handleError(res, "rule should be an object.", constants.BAD_REQUEST, null);
  //   }
  if (typeof req.body.rule !== "object") {
    return handleError(res, "rule should be an object.", constants.BAD_REQUEST, null);
  }
  if (!req.body.rule.field || !req.body.rule.condition || !req.body.rule.conditionValue) {
    return handleError(res, `field ${req.body.rule.field} is missing from data.`, constants.BAD_REQUEST, null);
  }
  if (!req.body.data) {
    return handleError(res, "data is required.", constants.BAD_REQUEST, null);
  }
  if (!(req.body.rule.field.includes(Object.keys(req.body.data)))) {
    return handleError(res, `field ${req.body.rule.field} is missing from field data.`, constants.BAD_REQUEST, null);
  }
  if (!(JSON.parse(req.body.data)) || !(typeof req.body.data === "string") || !(Array.isArray(req.body.data))) {
    return handleError(res, `${req.body.data} should be an object.`, constants.BAD_REQUEST, null);
  }
  if ((Array.isArray(req.body.data)) && !(req.body.rule.includes(req.body.data))) {
    return handleError(res, `field ${req.body.rule} is missing from data.`, constants.BAD_REQUEST, null);
  }
  // const { rule: { field, condition, conditionValue } } = req.body;
  return next();
};

export default inputValidation;
