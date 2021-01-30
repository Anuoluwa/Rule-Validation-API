import { handleError } from "../helpers/response";
import {
  isEqual, isNotEqual, isGreaterThan, isGreaterThanOrEqual, isContain, handleConditionError
} from "../helpers/conditionHelpers";
import constants from "../helpers/constants";

const validationCondition = async (req, res, next) => {
  try {
    const conditionValues = [ "eq", "neq", "gt", "gte", "contains" ];
    const { field, condition, condition_value: conditionValue } = req.body.rule;
    const { data } = req.body;

    if (!(conditionValues.includes(condition))) {
      return handleError(res, "Invalid input for field condition; use e.g eq, neq, gt, gte, or contains", "error", null);
    }
    if (condition == "eq" && !(isEqual(field, conditionValue, data))) {
      const validation = handleConditionError(req, res);
      return handleError(res, `field ${field} failed validation.`, constants.BAD_REQUEST, validation);
    }
    if (condition == "neq" && !(isNotEqual(field, conditionValue, data))) {
      const validation = handleConditionError(req, res);
      return handleError(res, `field ${field} failed validation.`, constants.BAD_REQUEST, validation);
    }
    if (condition == "gt" && !(isGreaterThan(field, conditionValue, data))) {
      const validation = handleConditionError(req, res);
      return handleError(res, `field ${field} failed validation.`, constants.BAD_REQUEST, validation);
    }
    if (condition == "gte" && !(isGreaterThanOrEqual(field, conditionValue, data))) {
      const validation = handleConditionError(req, res);
      return handleError(res, `field ${field} failed validation.`, constants.BAD_REQUEST, validation);
    }
    if (condition == "contains" && !(isContain(field, conditionValue, data))) {
      const validation = handleConditionError(req, res);
      return handleError(res, `field ${field} failed validation.`, constants.BAD_REQUEST, validation);
    }

    return next();
  } catch (err) {
    console.log(err);
  }
};

export default validationCondition;
