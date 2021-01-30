import express from "express";
import authorData from "../data/authorData";
import validationController from "../controllers/validationController";
import jsonValidation from "../validations/jsonValidation";
import validationCondition from "../middlewares/validationCondition";
import checkRuleInData from "../validations/dataValidation";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json({
    message: "My Rule-Validation API",
    status: "success",
    data: authorData[0]
  }));

indexRouter.post("/validate-rule", [ jsonValidation, checkRuleInData, validationCondition ], validationController.validateRule);

export default indexRouter;
