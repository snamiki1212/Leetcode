function permute(nums: number[]): number[][] {
  let outputs = [];
  dfs(nums, outputs, []);
  return outputs;
}

const dfs = (nums: number[], outputs: number[][], picked: number[]) => {
  if (nums.length == 0) return outputs.push(picked);
  for (let i = 0; i < nums.length; i++) {
    const remain = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    const choosing = picked.concat(nums[i]);
    dfs(remain, outputs, choosing);
  }
};
