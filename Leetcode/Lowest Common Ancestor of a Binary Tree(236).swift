/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */

class Solution {
    func lowestCommonAncestor(_ root: TreeNode?, _ p: TreeNode?, _ q: TreeNode?) -> TreeNode? {
      // Return null if not find nodes we are looking for.
      func dfs(_ root: TreeNode?) -> TreeNode? {
        if root == nil { return nil }
        if root?.val == p?.val || root?.val == q?.val { return root } // current is node we are looking for.
        let left  = dfs(root?.left)
        let right = dfs(root?.right)
        if left == nil && right == nil { return nil } // not find in children.
        if left != nil && right != nil { return root } // current is LCA.
        return left == nil ? right : left // return either if one child has node.
      }
      
      return dfs(root)
    }
}