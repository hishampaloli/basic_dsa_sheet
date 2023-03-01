//TODO: get nth node from the end

// class Solution {

//   getNthFromLast(head, n) {
//     let index = 0;
//     let countHead = head;
//     while (countHead) {
//       countHead = countHead.next;
//       index++;
//     }

//     let nodeIndex = index - n + 1;
//     index = 1;

//     if (nodeIndex <= 0) return -1;

//     while (head) {
//       if (index === nodeIndex) {
//         return head.data;
//       } else {
//         index++;
//         head = head.next;
//       }
//     }
//   }
// }

// TODO: find the middle node in linked list

// class Solution {
//   getMiddle(node) {
//     let index = 0;
//     let head = node;

//     while (head) {
//       index++;
//       head = head.next;
//     }
//     let middleIndex = index % 2 == 0 ? index / 2 + 1 : (index - 1) / 2 + 1;
//     index = 0;
//     while (node) {
//       index++;
//       if (index === middleIndex) return node.data;
//       node = node.next;
//     }
//   }
// }

// TODO: reverse a linked list

// class Solution {
//   //Function to reverse a linked list.
//   reverseList(head) {
//     let current = head;
//     let next = null;
//     let prev = null;

//     while (current) {
//       next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     return current;
//   }
// }

// TODO: number of node in a linked list

// class Solution {
//   //Function to count nodes of a linked list.
//   getCount(head) {
//     let numberOfnodes = 0;

//     while (head) {
//       numberOfnodes++;
//       head = head.next;
//     }
//     return numberOfnodes
//   }
// }

// TODO: delete a given node from a linked list

// class Solution {
//   deleteNode(head, x) {
//     let temp = head;
//     if (head === null) return null;

//     if (x === 1) {
//       head = temp.next;
//       return head;
//     }

//     for (let i = 1; temp !== null && i < x - 1; i++) {
//       temp = temp.next;
//     }

//     if (temp === null || temp.next === null) return null;

//     if (temp.next.next === null) temp.next = null;
//     else temp.next = temp.next.next;

//     return head;
//   }
// }

// TODO: check if a linked list contain cycle

// class Solution {
//   isCycle(head) {
//     let slow = head;
//     let fast = head;
//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (fast === slow) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// TODO: count the number of node is a loop;

// class Solution {
//   //Function to find the length of a loop in the linked list.
//   countNodesinLoop(head) {
//     let slow = head;
//     let fast = head;
//     let count = 0;
//     let isCyclic = false;

//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;

//       if (isCyclic) count++;
//       if (isCyclic && fast === slow) break;
//       if (fast == slow) isCyclic = true;
//     }

//     return count;
//   }
// }