function majorityElement(nums: number[]): number {
  let dict = new Map();
  let majority = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    dict.has(num) ? dict.set(num, dict.get(num) + 1) : dict.set(num, 1);
    const isMajority = Math.round(nums.length / 2) <= dict.get(num);
    if (isMajority) majority = num;
  }
  return majority;
}
