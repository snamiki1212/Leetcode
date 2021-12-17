/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let _next;
  let _prev = null;
  let now = head;

  while (now !== null) {
    _next = now.next;
    now.next = _prev;
    _prev = now;
    now = _next;
  }

  return _prev;
}
