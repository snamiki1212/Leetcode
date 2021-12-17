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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return dfs(nums, 0, nums.length-1)
};

const dfs = (list: number[], from:number, to:number) => {
    if(from>to) return null
    const mid = Math.round((from+to)/2)
    let tree = new TreeNode()
    tree.val = list[mid]
    tree.left  = dfs(list, from, mid-1)
    tree.right = dfs(list, mid+1, to)
    return tree
}

