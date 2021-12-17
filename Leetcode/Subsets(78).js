/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let output;
const subsets = (nums) => {
  output = [[]];
  duplicated = doSubsets(nums, [], 0);
  return duplicated;
};

const doSubsets = function (nums, inners, startIdx) {
  if (nums.length <= 0 || startIdx >= nums.length) return;

  for (let i = startIdx; i < nums.length; i++) {
    inners.push(nums[i]);
    output.push([...inners]);
    doSubsets(nums, inners, i + 1);
    inners.pop();
  }

  return output;
};
