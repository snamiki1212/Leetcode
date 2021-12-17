/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = (root) => {
  diameter = 0;

  const maxDepth = (node) => {
    if (node == undefined) return 0;
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    diameter = Math.max(diameter, left + right);
    const depth = Math.max(left, right);
    return depth + 1;
  };

  maxDepth(root);
  return diameter;
};

// 1. get max depth of each children
// 2. keep ans
//
