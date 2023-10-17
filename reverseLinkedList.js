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
 */
var reverseList = function (head) {
    if (!head) {
        return head
    }
    let prevNode = null;
    let nextNode = head;
    while (nextNode.next) {
        const temp = nextNode.next;
        nextNode.next = prevNode;
        prevNode = nextNode
        nextNode = temp
    }
    nextNode.next = prevNode;
    return nextNode
};
// Given the head of a singly linked list, reverse the list, and return the reversed list.