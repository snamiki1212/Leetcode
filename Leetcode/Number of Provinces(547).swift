class Solution {

  public struct UF {
    /// parent[i] = parent of i
    private var parent: [Int]
    /// size[i] = number of nodes in tree rooted at i
    private var size: [Int]
    /// number of components
    private(set) var count: Int
    
    /// Initializes an empty union-find data structure with **n** elements
    /// **0** through **n-1**.
    /// Initially, each elements is in its own set.
    /// - Parameter n: the number of elements
    public init(_ n: Int) {
        self.count = n
        self.size = [Int](repeating: 1, count: n)
        self.parent = [Int](repeating: 0, count: n)
        for i in 0..<n {
            self.parent[i] = i
        }
    }
    
    /// Returns the canonical element(root) of the set containing element `p`.
    /// - Parameter p: an element
    /// - Returns: the canonical element of the set containing `p`
    public mutating func find(_ p: Int) -> Int {
        var i = p;
        while(parent[i] != i){
            parent[i] = parent[parent[i]]
            i = parent[i]
        }
        return i
    }
    
    /// Returns `true` if the two elements are in the same set.
    /// - Parameters:
    ///   - p: one elememt
    ///   - q: the other element
    /// - Returns: `true` if `p` and `q` are in the same set; `false` otherwise
    public mutating func connected(_ p: Int, _ q: Int) -> Bool {
        let parentP = find(p)
        let parentQ = find(q)
        return parentP == parentQ
    }
    
    /// Merges the set containing element `p` with the set containing
    /// element `q`
    /// - Parameters:
    ///   - p: one element
    ///   - q: the other element
    public mutating func union(_ p: Int, _ q: Int) {
        let P = find(p)
        let Q = find(q)
        if P == Q { return }
        if P < Q { parent[P] = parent[Q]; size[Q] += size[P] }
        else     { parent[Q] = parent[P]; size[P] += size[Q] }
    }
  }

  
    func findCircleNum(_ isConnected: [[Int]]) -> Int {
      var uf = UF.init(isConnected.count)
      for i in 0..<isConnected.count {
        for j in 0..<isConnected[i].count where i != j {
          if isConnected[i][j] == 1 { uf.union(i, j) }
        }
      }
      
      var parents: Set<Int> = [];
      for i in 0..<isConnected.count {
        parents.insert(uf.find(i))
      }
      return parents.count;
      
    }
    

}
