class Solution {
  func maxSubArray(_ nums: [Int]) -> Int {
      var dp = [Int](repeating: -1, count: nums.count)
      dp[0] = nums[0]
      for i in 1..<nums.count {
          dp[i] = max(dp[i-1] + nums[i], nums[i])
      }
      return dp.max()!
  }
}
