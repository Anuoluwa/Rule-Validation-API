import constants from "../helpers/constants";
import { handleError } from "../helpers/response";

const checkRuleInData = async (req, res, next) => {
  try {
    const { data } = req.body;
    const { field } = req.body.rule;
    if (typeof data === "string" && !(data == field)) {
      return handleError(res, `field ${field} is missing from data.`, constants.BAD_REQUEST, null);
    }
    if (Array.isArray(data) && !(data.includes(field))) {
      return handleError(res, `field ${field} is missing from data.`, constants.BAD_REQUEST, null);
    }

    if (Object.keys(data).length !== 0 && data.constructor === Object && (field.includes("."))) {
      const fieldproperties = field.split(".");
      if (!(Object.keys(data).includes(fieldproperties[0])) || !(Object.keys(data[`${fieldproperties[0]}`]).includes(fieldproperties[1]))) {
        handleError(res, `field ${field} is missing from data.`, constants.BAD_REQUEST, null);
      }
      if (fieldproperties && fieldproperties.length > 2) handleError(res, "nesting should not be more than two levels", constants.BAD_REQUEST, null);
    }
    return next();
  } catch (err) {
    console.log(err);
  }
};

export default checkRuleInData;
