function topKFrequent(nums: number[], k: number): number[] {
  const map = {}; // key=num, val=count
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    map[n] = map[n] == undefined ? 1 : map[n] + 1;
  }

  let buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (let key in map) {
    const count = map[key];
    buckets[count].push(Number(key));
  }

  buckets = buckets.filter((item) => item.length != 0);
  let outputs = [];
  let count = k;
  for (let i = buckets.length - 1; i >= 0; i--) {
    while (buckets[i].length != 0) {
      outputs.push(buckets[i].pop());
      count -= 1;
      if (count == 0) return outputs;
    }
  }
  throw new Error("Invalid");
}
