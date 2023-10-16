/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head.z
*/
class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null
    }
}
var removeNthFromEnd = function (head, n) {
    let count = 0;
    let node = head;
    while (node) {
        count++;
        node = node.next
    }
    let res = new ListNode(-1)
    let dummy = res
    let currentNode = head
    for (let i = 1; i <= count; i++) {
        if (i === (count - n + 1)) {
            currentNode = currentNode.next
            continue
        }
        let newNode = new ListNode(currentNode.val);
        dummy.next = newNode
        dummy = newNode
        currentNode = currentNode.next;
    }
    return res.next
};