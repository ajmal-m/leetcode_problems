/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/*

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

*/
class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}
var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }
    let head = new ListNode(-1)
    let dummy = head;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            let node = new ListNode(list2.val);
            dummy.next = node;
            dummy = node
            list2 = list2.next
        } else if (list1.val < list2.val) {
            let node = new ListNode(list1.val);
            dummy.next = node;
            dummy = node
            list1 = list1.next
        } else {
            let node1 = new ListNode(list1.val);
            let node2 = new ListNode(list2.val);
            dummy.next = node1;
            node1.next = node2;
            dummy = node2;
            list1 = list1.next;
            list2 = list2.next
        }
    }
    if (list1) {
        dummy.next = list1
    }
    if (list2) {
        dummy.next = list2
    }
    return head.next
};