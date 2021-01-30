"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _response = require("../helpers/response");

var _constants = _interopRequireDefault(require("../helpers/constants"));

var inputValidation = function inputValidation(req, res, next) {
  if (!req.body.rule) {
    return (0, _response.handleError)(res, "rule is required.", _constants["default"].BAD_REQUEST, null);
  } //   if (!(JSON.parse(req.body.rule))) {
  //     return handleError(res, "rule should be an object.", constants.BAD_REQUEST, null);
  //   }


  if ((0, _typeof2["default"])(req.body.rule) !== "object") {
    return (0, _response.handleError)(res, "rule should be an object.", _constants["default"].BAD_REQUEST, null);
  }

  if (!req.body.rule.field || !req.body.rule.condition || !req.body.rule.conditionValue) {
    return (0, _response.handleError)(res, "field ".concat(req.body.rule.field, " is missing from data."), _constants["default"].BAD_REQUEST, null);
  }

  if (!req.body.data) {
    return (0, _response.handleError)(res, "data is required.", _constants["default"].BAD_REQUEST, null);
  }

  if (!req.body.rule.field.includes(Object.keys(req.body.data))) {
    return (0, _response.handleError)(res, "field ".concat(req.body.rule.field, " is missing from field data."), _constants["default"].BAD_REQUEST, null);
  }

  if (!JSON.parse(req.body.data) || !(typeof req.body.data === "string") || !Array.isArray(req.body.data)) {
    return (0, _response.handleError)(res, "".concat(req.body.data, " should be an object."), _constants["default"].BAD_REQUEST, null);
  }

  if (Array.isArray(req.body.data) && !req.body.rule.includes(req.body.data)) {
    return (0, _response.handleError)(res, "field ".concat(req.body.rule, " is missing from data."), _constants["default"].BAD_REQUEST, null);
  } // const { rule: { field, condition, conditionValue } } = req.body;


  return next();
};

var _default = inputValidation;
exports["default"] = _default;