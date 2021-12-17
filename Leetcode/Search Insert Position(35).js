/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let from = 0;
  let to = nums.length - 1;

  while (true) {
    const mid = Math.trunc((to + from) / 2);

    // guards
    if (nums[from] >= target) return from;
    if (nums[to] < target) return to + 1;
    if (nums[mid] === target) return mid;
    if (mid <= from) return to;

    if (nums[mid] < target) {
      from = mid;
    } else {
      to = mid;
    }
  }
};
