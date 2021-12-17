/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let len = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (m >= 0 && nums1[m] > nums2[n]) {
      nums1[len] = nums1[m];
      m--;
    } else {
      nums1[len] = nums2[n];
      n--;
    }
    len--;
  }
}
