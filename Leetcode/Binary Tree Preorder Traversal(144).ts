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

function preorderTraversal(root: TreeNode | null): number[] {
  return dfs(root, [])
};

const dfs = (root: TreeNode | null, output: number[]) => {
  if(root == null) return output
  output.push(root.val)
  dfs(root.left, output)
  dfs(root.right, output)
  return output
}