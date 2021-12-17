class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        var map = [Int:Bool]()
        for item in nums {
          if let _ = map[item] { return true }
          map[item] = true
        }
        return false
    }
}