function singleNumber(nums: number[]): number {
  let dict = new Map()
  for(let i=0; i<nums.length; i++){
    const num = nums[i]
    dict.has(num)
      ? dict.delete(num)
      : dict.set(num, num)
  }
  return dict.keys().next().value
};