/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  head = list = new ListNode();

  while (true) {
    if (l1.val <= l2.val) {
      list.next = l1;
      l1 = l1.next;
    } else {
      list.next = l2;
      l2 = l2.next;
    }
    list = list.next;
    if (l1 == null) {
      list.next = l2;
      break;
    }
    if (l2 == null) {
      list.next = l1;
      break;
    }
  }

  return head.next;
};
