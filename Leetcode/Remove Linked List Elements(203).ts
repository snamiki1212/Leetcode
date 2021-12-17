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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head;

  // remove head
  while (current != null && current.val == val) current = current.next;
  if (current == null || current.next == null) return current;
  const newHead = current;

  // remove items
  while (current != null && current.next != null) {
    while (current.next != null && current.next.val == val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return newHead;
}
