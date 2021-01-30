"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkNestedObject = exports.handleConditionError = exports.isContain = exports.isGreaterThanOrEqual = exports.isGreaterThan = exports.isNotEqual = exports.isEqual = void 0;

var isEqual = function isEqual(field, conditionValue, data) {
  if (field.includes(".")) {
    var props = field.split(".");
    if (data["".concat(props[0])]["".concat(props[1])] == conditionValue) return true;
  }

  if (data["".concat(field)] == conditionValue) return true;
};

exports.isEqual = isEqual;

var isNotEqual = function isNotEqual(field, conditionValue, data) {
  if (field.includes(".")) {
    var props = field.split(".");
    if (data["".concat(props[0])]["".concat(props[1])] !== conditionValue) return true;
  }

  if (data["".concat(field)] !== conditionValue) return true;
};

exports.isNotEqual = isNotEqual;

var isGreaterThan = function isGreaterThan(field, conditionValue, data) {
  if (field.includes(".")) {
    var props = field.split(".");
    if (data["".concat(props[0])]["".concat(props[1])] > conditionValue) return true;
  }

  if (data["".concat(field)] > conditionValue) return true;
};

exports.isGreaterThan = isGreaterThan;

var isGreaterThanOrEqual = function isGreaterThanOrEqual(field, conditionValue, data) {
  if (field.includes(".")) {
    var props = field.split(".");
    if (data["".concat(props[0])]["".concat(props[1])] >= conditionValue) return true;
  }

  if (data["".concat(field)] >= conditionValue) return true;
};

exports.isGreaterThanOrEqual = isGreaterThanOrEqual;

var isContain = function isContain(field, conditionValue, data) {
  if (Array.isArray(data) && !data["".concat(field)].length) {
    if (data["".concat(field)].includes(conditionValue)) return true;

    if (field.includes(".")) {
      var props = field.split(".");
      if (data["".concat(props[0])]["".concat(props[1])] == conditionValue) return true;
    }
  }
};

exports.isContain = isContain;

var handleConditionError = function handleConditionError(req, res) {
  var _req$body$rule = req.body.rule,
      field = _req$body$rule.field,
      condition = _req$body$rule.condition,
      conditionValue = _req$body$rule.conditionValue;
  var dataObject = req.body.data;

  if (field.includes(".")) {
    var props = field.split(".");
    var _validation = {
      error: true,
      field: field,
      field_value: dataObject["".concat(props[0])]["".concat(props[1])],
      condition: condition,
      conditionValue: conditionValue
    };
    return _validation;
  }

  var validation = {
    error: true,
    field: field,
    field_value: dataObject["".concat(field)],
    condition: condition,
    conditionValue: conditionValue
  };
  return validation;
};

exports.handleConditionError = handleConditionError;

var checkNestedObject = function checkNestedObject(input) {
  if (input.includes(".")) {
    var fieldproperties = input.split(".");
    var arr = fieldproperties.filter(Boolean);
    if (arr.length == 2) return arr;
  }
};

exports.checkNestedObject = checkNestedObject;