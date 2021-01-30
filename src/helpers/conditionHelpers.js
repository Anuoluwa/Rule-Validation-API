export const isEqual = (field, conditionValue, data) => {
  if (field.includes(".")) {
    const props = field.split(".");
    if ((data[`${props[0]}`][`${props[1]}`] == conditionValue)) return true;
  }
  if ((data[`${field}`] == conditionValue)) return true;
};

export const isNotEqual = (field, conditionValue, data) => {
  if (field.includes(".")) {
    const props = field.split(".");
    if ((data[`${props[0]}`][`${props[1]}`] !== conditionValue)) return true;
  }
  if ((data[`${field}`] !== conditionValue)) return true;
};

export const isGreaterThan = (field, conditionValue, data) => {
  if (field.includes(".")) {
    const props = field.split(".");
    if ((data[`${props[0]}`][`${props[1]}`] > conditionValue)) return true;
  }
  if ((data[`${field}`] > conditionValue)) return true;
};

export const isGreaterThanOrEqual = (field, conditionValue, data) => {
  if (field.includes(".")) {
    const props = field.split(".");
    if ((data[`${props[0]}`][`${props[1]}`] >= conditionValue)) return true;
  }
  if ((data[`${field}`] >= conditionValue)) return true;
};

export const isContain = (field, conditionValue, data) => {
  if (Array.isArray(data) && !data[`${field}`].length) {
    if ((data[`${field}`].includes(conditionValue))) return true;
    if (field.includes(".")) {
      const props = field.split(".");
      if ((data[`${props[0]}`][`${props[1]}`] == conditionValue)) return true;
    }
  }
};

export const handleConditionError = (req, res) => {
  const { field, condition, conditionValue } = req.body.rule;
  const dataObject = req.body.data;
  if (field.includes(".")) {
    const props = field.split(".");
    const validation = {
      error: true,
      field,
      field_value: dataObject[`${props[0]}`][`${props[1]}`],
      condition,
      conditionValue,
    };
    return validation;
  }
  const validation = {
    error: true,
    field,
    field_value: dataObject[`${field}`],
    condition,
    conditionValue,
  };
  return validation;
};

export const checkNestedObject = (input) => {
  if (input.includes(".")) {
    const fieldproperties = input.split(".");
    const arr = fieldproperties.filter(Boolean);
    if (arr.length == 2) return arr;
  }
};
