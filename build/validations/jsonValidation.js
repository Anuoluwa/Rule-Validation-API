"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validationSchema = _interopRequireDefault(require("../../validationSchema"));

var _constants = _interopRequireDefault(require("../helpers/constants"));

var _response = require("../helpers/response");

var _require = require("jsonschema"),
    validate = _require.validate;

var jsonValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(req.headers["content-type"] !== "application/json")) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", (0, _response.handleError)(res, "Invalid JSON payload passed.", _constants["default"].BAD_REQUEST, null));

          case 3:
            result = validate(req.body, _validationSchema["default"]);

            if (!result.valid) {
              result.errors.map(function (error) {
                if (error.stack.includes("requires property")) {
                  return (0, _response.handleError)(res, "".concat(error.argument, " is required."), _constants["default"].BAD_REQUEST, null);
                }

                if (error.stack.includes("is not of a type(s) string")) {
                  return (0, _response.handleError)(res, "".concat(error.path[1], " should be a string."), _constants["default"].BAD_REQUEST, null);
                }

                if (error.stack.includes("is not of a type(s) integer")) {
                  return (0, _response.handleError)(res, "".concat(error.path[1], " should be an integer."), _constants["default"].BAD_REQUEST, null);
                }

                if (error.stack.includes("instance.data is not of a type(s) object,array,string")) {
                  return (0, _response.handleError)(res, "".concat(error.path[0], " should be an object."), _constants["default"].BAD_REQUEST, null);
                }

                if (error.stack.includes("instance.rule is not of a type(s) object")) {
                  return (0, _response.handleError)(res, "".concat(error.path[0], " should be an object."), _constants["default"].BAD_REQUEST, null);
                }
              });
            }

            return _context.abrupt("return", next());

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function jsonValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = jsonValidation;
exports["default"] = _default;