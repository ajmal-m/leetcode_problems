/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 */
var deleteDuplicates = function (head) {
    if (!head) {
        return head
    }
    let node1 = head;
    let node2 = head.next;
    while (node1 && node2) {
        if (node1.val === node2.val) {
            const temp = node2.next;
            node1.next = temp;
            node2 = node1.next
        } else {
            node1 = node1.next;
            node2 = node2.next;
        }
    }
    return head
};