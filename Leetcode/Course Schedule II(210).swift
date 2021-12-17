class Solution {
    func findOrder(_ numCourses: Int, _ prerequisites: [[Int]]) -> [Int] {
        var graph = [[Int]](repeating: [], count: numCourses)
        var indegree = [Int](repeating: 0, count: numCourses)
        var visited = [Bool](repeating: false, count: numCourses)
        var queue = [Int]()
        var result = [Int]()
        
        // initialize
        for edge in prerequisites {
            let from = edge[1]
            let to = edge[0]
            graph[from].append(to)
            indegree[to] += 1
        }
        for i in 0..<indegree.count where indegree[i] == 0 {
            queue.append(i)
            result.append(i)
        }
        if queue.isEmpty { return [] }

        // algorithm
        while !queue.isEmpty {
            let from = queue.removeFirst()
            visited[from] = true
            for to in graph[from] {
                indegree[to] -= 1
                if indegree[to] == 0 {
                    queue.append(to)
                    result.append(to)
                }
            }
        }
        
        // guard
        if !indegree.allSatisfy({ $0 == 0 }) { return []}
        if !visited.allSatisfy({ $0 }) { return [] }
        
        return result
    }
}