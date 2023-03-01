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
