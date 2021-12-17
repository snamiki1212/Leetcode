class Solution {
    func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
        var graph = [[Int]](repeating: [], count: numCourses)
        var indegree = [Int](repeating: 0, count: numCourses)
        for edge in prerequisites {
            let to = edge[0]
            let from = edge[1]
            graph[from].append(to)
            indegree[to] += 1
        }
        
        var stack = [Int]()
        
        for i in 0..<indegree.count where indegree[i] == 0 {
            stack.append(i)
        }
        
        if stack.isEmpty { return false }
        
        while let item = stack.popLast() {
            for next in graph[item] {
                indegree[next] -= 1
                if indegree[next] == 0 {
                    stack.append(next)
                }
            }
        }
        
        if stack.isEmpty && indegree.allSatisfy({ $0 == 0 }) { return true }
        return false
    }
}