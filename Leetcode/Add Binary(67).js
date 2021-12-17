/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aList = [...a];
  const bList = [...b];

  let aIdx = aList.length - 1;
  let bIdx = bList.length - 1;

  let result = Array.from(
    { length: Math.max(aList.length, bList.length) },
    () => 0
  );
  let resultIdx = result.length - 1;

  while (resultIdx >= 0) {
    const aItem = aIdx < 0 ? 0 : toNum(aList[aIdx]);
    const bItem = bIdx < 0 ? 0 : toNum(bList[bIdx]);
    let total = aItem + bItem + result[resultIdx];

    if (total >= 2) {
      total -= 2;
      result[resultIdx] = total;
      if (resultIdx - 1 < 0) {
        result = [1, ...result];
      } else {
        result[resultIdx - 1] += 1;
      }
    } else {
      result[resultIdx] = total;
    }

    aIdx--;
    bIdx--;
    resultIdx--;
  }

  const str = result.join("");
  return str;
};

const toNum = (str) => {
  const maybe = parseInt(str);
  if (isNaN(maybe)) throw new Error("Invalid char");
  return maybe;
};
