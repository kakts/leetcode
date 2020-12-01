/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let result = [];
  let len = head.length;
  for (let i = 0; i < len; i++) {
    result[i] = head[len - 1 - i];
  }
  return result;
}