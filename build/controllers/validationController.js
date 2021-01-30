"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _constants = _interopRequireDefault(require("../helpers/constants"));

var _response = require("../helpers/response");

var validationController = {
  validateRule: function () {
    var _validateRule = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body$rule, field, condition, condition_value, dataObject, props, _validation, validation;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body$rule = req.body.rule, field = _req$body$rule.field, condition = _req$body$rule.condition, condition_value = _req$body$rule.condition_value;
              dataObject = req.body.data;

              if (!field.includes(".")) {
                _context.next = 6;
                break;
              }

              props = field.split(".");
              _validation = {
                error: false,
                field: field,
                field_value: dataObject["".concat(props[0])]["".concat(props[1])],
                condition: condition,
                condition_value: condition_value
              };
              return _context.abrupt("return", (0, _response.handleSuccess)(res, "field ".concat(field, " successfully validated."), _constants["default"].OK, _validation));

            case 6:
              validation = {
                error: false,
                field: field,
                field_value: dataObject["".concat(field)],
                condition: condition,
                condition_value: condition_value
              };
              return _context.abrupt("return", (0, _response.handleSuccess)(res, "field ".concat(field, " successfully validated."), _constants["default"].OK, validation));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function validateRule(_x, _x2) {
      return _validateRule.apply(this, arguments);
    }

    return validateRule;
  }()
};
var _default = validationController;
exports["default"] = _default;