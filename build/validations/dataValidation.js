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

var checkRuleInData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data, field, fieldproperties;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = req.body.data;
            field = req.body.rule.field;

            if (!(typeof data === "string" && !(data == field))) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " is missing from data."), _constants["default"].BAD_REQUEST, null));

          case 5:
            if (!(Array.isArray(data) && !data.includes(field))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", (0, _response.handleError)(res, "field ".concat(field, " is missing from data."), _constants["default"].BAD_REQUEST, null));

          case 7:
            if (Object.keys(data).length !== 0 && data.constructor === Object && field.includes(".")) {
              fieldproperties = field.split(".");

              if (!Object.keys(data).includes(fieldproperties[0]) || !Object.keys(data["".concat(fieldproperties[0])]).includes(fieldproperties[1])) {
                (0, _response.handleError)(res, "field ".concat(field, " is missing from data."), _constants["default"].BAD_REQUEST, null);
              }

              if (fieldproperties && fieldproperties.length > 2) (0, _response.handleError)(res, "nesting should not be more than two levels", _constants["default"].BAD_REQUEST, null);
            }

            return _context.abrupt("return", next());

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function checkRuleInData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = checkRuleInData;
exports["default"] = _default;