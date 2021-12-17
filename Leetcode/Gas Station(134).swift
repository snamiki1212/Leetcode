class Solution {
    func canCompleteCircuit(_ gas: [Int], _ cost: [Int]) -> Int {
        var candidates = [Int]()
        for i in 0..<gas.count {
          if gas[i] >= cost[i] {
            candidates.append(i)
          }
        }
      
        
        while !candidates.isEmpty {
          let from = candidates.removeFirst();
          
          var sum = 0;
          var count = 0;
          var i = from
          while count < gas.count {
            sum += gas[i] - cost[i]
            count += 1
            i = (i+1) % gas.count
            if sum < 0 { break }
          }
          if sum < 0 { continue }
          return from
        }
        return -1
    }
}