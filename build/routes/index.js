"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authorData = _interopRequireDefault(require("../data/authorData"));

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
var _default = indexRouter;
exports["default"] = _default;