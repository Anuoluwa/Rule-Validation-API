"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _response = require("../helpers/response");

var _conditionHelpers = require("../helpers/conditionHelpers");

var _constants = _interopRequireDefault(require("../helpers/constants"));

var validationCondition = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var conditionValues, _req$body$rule, field, condition, conditionValue, data, validation, _validation, _validation2, _validation3, _validation4;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            conditionValues = ["eq", "neq", "gt", "gte", "contains"];
            _req$body$rule = req.body.rule, field = _req$body$rule.field, condition = _req$body$rule.condition, conditionValue = _req$body$rule.condition_value;
            data = req.body.data;

            if (conditionValues.includes(condition)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0, _response.handleError)(res, "Invalid input for field condition; use e.g eq, neq, gt, gte, or contains", "error", null));

          case 6:
            if (!(condition == "eq" && !(0, _conditionHelpers.isEqual)(field, conditionValue, data))) {
              _context.next = 9;
              break;
            }

            validation = (0, _conditionHelpers.handleConditionError)(req, res);
            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " failed validation."), _constants["default"].BAD_REQUEST, validation));

          case 9:
            if (!(condition == "neq" && !(0, _conditionHelpers.isNotEqual)(field, conditionValue, data))) {
              _context.next = 12;
              break;
            }

            _validation = (0, _conditionHelpers.handleConditionError)(req, res);
            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " failed validation."), _constants["default"].BAD_REQUEST, _validation));

          case 12:
            if (!(condition == "gt" && !(0, _conditionHelpers.isGreaterThan)(field, conditionValue, data))) {
              _context.next = 15;
              break;
            }

            _validation2 = (0, _conditionHelpers.handleConditionError)(req, res);
            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " failed validation."), _constants["default"].BAD_REQUEST, _validation2));

          case 15:
            if (!(condition == "gte" && !(0, _conditionHelpers.isGreaterThanOrEqual)(field, conditionValue, data))) {
              _context.next = 18;
              break;
            }

            _validation3 = (0, _conditionHelpers.handleConditionError)(req, res);
            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " failed validation."), _constants["default"].BAD_REQUEST, _validation3));

          case 18:
            if (!(condition == "contains" && !(0, _conditionHelpers.isContain)(field, conditionValue, data))) {
              _context.next = 21;
              break;
            }

            _validation4 = (0, _conditionHelpers.handleConditionError)(req, res);
            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " failed validation."), _constants["default"].BAD_REQUEST, _validation4));

          case 21:
            return _context.abrupt("return", next());

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 24]]);
  }));

  return function validationCondition(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = validationCondition;
exports["default"] = _default;