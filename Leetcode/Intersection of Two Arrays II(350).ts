const doGet = (map: Map<any, any>, key: any) =>
  map.has(key) ? map.get(key) : 0;

function intersect(nums1: number[], nums2: number[]): number[] {
  let map = new Map();
  let output = [];

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], doGet(map, nums1[i]) + 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (doGet(map, nums2[i]) <= 0) continue;
    output.push(nums2[i]);
    map.set(nums2[i], doGet(map, nums2[i]) - 1);
  }

  return output;
}
