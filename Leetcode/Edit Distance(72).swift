class Solution {
    func minDistance(_ word1: String, _ word2: String) -> Int {
        let w1 = word1.map({ String($0) })
        let w2 = word2.map({ String($0) })
        var dp = [[Int]](repeating: [Int](repeating: Int.max, count: w2.count+1), count: w1.count+1)
        dp[0][0] = 0
        
        for i in 0..<w1.count+1 {
            for j in 0..<w2.count+1 {
                
                if i-1 >= 0 && j-1 >= 0 {
                    // noop
                    if w1[i-1] == w2[j-1] {
                        dp[i][j] = min(dp[i][j], dp[i-1][j-1])
                    }
                    // change
                    else {
                        dp[i][j] = min(dp[i][j], dp[i-1][j-1]+1)
                    }
                }
                                
                // delete
                if i-1 >= 0 {
                    dp[i][j] = min(dp[i][j], dp[i-1][j]+1)
                }
                
                // insert
                if j-1 >= 0 {
                    dp[i][j] = min(dp[i][j], dp[i][j-1]+1)
                }
            }
        }
        
        return dp[w1.count][w2.count]
    }
}