/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) return false; // negative
  if (x == 0) return true; // because of avoiding next pattern
  if (x % 10 == 0) return false; // xxxxxx0 pattern

  let y = 0;
  while (x > y) {
    // get last num
    last = x % 10;

    // drop last
    x = Math.trunc(x / 10);

    // assign to y
    y = y * 10 + last;
  }

  return x == y || x == Math.trunc(y / 10);
};
