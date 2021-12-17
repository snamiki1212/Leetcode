class Solution {
    var memo = [Int](repeating: -1, count: 46)
    func climbStairs(_ n: Int) -> Int {
        if n==1 {return 1} 
        if n==2 {return 2}
        if memo[n] == -1 {memo[n] = climbStairs(n-1) + climbStairs(n-2)}
        return memo[n]
    }
}