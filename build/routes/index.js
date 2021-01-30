"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authorData = _interopRequireDefault(require("../data/authorData"));

var _validationController = _interopRequireDefault(require("../controllers/validationController"));

var _jsonValidation = _interopRequireDefault(require("../validations/jsonValidation"));

var _validationCondition = _interopRequireDefault(require("../middlewares/validationCondition"));

var _dataValidation = _interopRequireDefault(require("../validations/dataValidation"));

var indexRouter = _express["default"].Router();

indexRouter.get("/", function (req, res) {
  return (// eslint-disable-next-line implicit-arrow-linebreak
    res.status(200).json({
      message: "My Rule-Validation API",
      status: "success",
      data: _authorData["default"][0]
    })
  );
});
indexRouter.post("/validate-rule", [_jsonValidation["default"], _dataValidation["default"], _validationCondition["default"]], _validationController["default"].validateRule);
var _default = indexRouter;
exports["default"] = _default;