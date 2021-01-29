import constants from "../helpers/constants";
import { handleSuccess } from "../helpers/response";

const validationController = {
  validate_rule: async (req, res) => handleSuccess(res, "success", constants.OK, { mes: "good" })
};

export default validationController;
