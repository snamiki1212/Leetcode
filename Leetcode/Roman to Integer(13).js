symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let num = 0;
  let i = 0;
  while (i < s.length) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      num += symbols[s[i + 1]] - symbols[s[i]];
      i += 2;
    } else {
      num += symbols[s[i]];
      i++;
    }
  }
  return num;
};
