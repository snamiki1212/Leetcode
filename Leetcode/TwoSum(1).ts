function twoSum(nums: number[], target: number): number[] {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i];
    if (hashmap.has(key)) {
      return [hashmap.get(key), i];
    }

    hashmap.set(nums[i], i);
  }
}
