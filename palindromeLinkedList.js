/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true
    }
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let prev = null;
    let current = slow
    while (current) {
        const temp = current.next;
        current.next = prev
        prev = current
        current = temp
    }
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false
        }
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }
    return true
};

/*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.
*/