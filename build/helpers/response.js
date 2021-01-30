"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSuccess = exports.handleError = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var handleError = function handleError(res) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Something went wrong";
  var status = arguments.length > 2 ? arguments[2] : undefined;
  var data = arguments.length > 3 ? arguments[3] : undefined;
  var errorObject = {
    status: status,
    message: message,
    data: data
  };
  res.status(400).json(errorObject).end();
};

exports.handleError = handleError;

var handleSuccess = function handleSuccess(res) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
  var status = arguments.length > 2 ? arguments[2] : undefined;
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var errorObject = {
    message: message,
    status: status,
    data: data
  };
  return res.status(200).json(errorObject).end();
};

exports.handleSuccess = handleSuccess;