import constants from "../helpers/constants";
import { handleSuccess } from "../helpers/response";

const validationController = {
  validateRule: async (req, res) => {
    const { rule: { field, condition, condition_value } } = req.body;
    const dataObject = req.body.data;
    if (field.includes(".")) {
      const props = field.split(".");
      const validation = {
        error: false,
        field,
        field_value: dataObject[`${props[0]}`][`${props[1]}`],
        condition,
        condition_value,
      };
      return handleSuccess(res, `field ${field} successfully validated.`, constants.OK, validation);
    }
    const validation = {
      error: false,
      field,
      field_value: dataObject[`${field}`],
      condition,
      condition_value,
    };
    return handleSuccess(res, `field ${field} successfully validated.`, constants.OK, validation);
  }
};

export default validationController;
