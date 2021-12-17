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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let pointer = head;
  while (pointer !== null && pointer.next !== null) {
    if (pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return head;
}
