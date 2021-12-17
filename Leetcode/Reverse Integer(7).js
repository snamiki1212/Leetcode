/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let list = Array.from(`${x}`);
  let sign;

  [sign, list] = list[0] === "-" ? ["-", dropFirst(list)] : ["+", list];

  const num = parseInt(list.concat([sign]).reverse().join(""));
  if (!isValid(num)) return 0;

  return num;
};

const dropFirst = (list) => {
  [, ...rest] = list;
  return rest;
};

const isValid = (num) => {
  return (-2) ** 31 < num && num < 2 ** 31 - 1;
};
