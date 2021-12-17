/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return dfs(root, targetSum, 0)
};

const dfs = (root: TreeNode|null, targetSum: number, sum: number) => {
  if(root == null) return false

  const isLeaf = root.right == null && root.left == null
  if (isLeaf) return sum + root.val == targetSum
  
  const left = dfs(root.left, targetSum, sum + root.val)
  const right = dfs(root.right, targetSum, sum + root.val)
  
  return right || left
}