/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
class List {
    constructor(data) {
        this.val = data;
        this.next = null
    }
}
var removeElements = function (head, val) {
    let res = new List(-1);
    let dummy = res;
    let currentNode = head;
    while (currentNode) {
        if (currentNode.val !== val) {
            const temp = new List(currentNode.val)
            dummy.next = temp;
            dummy = temp
        }
        currentNode = currentNode.next
    }
    return res.next
};

/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
*/