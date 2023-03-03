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

// TODO: Find the Sum of Last N nodes of the Linked List

// class Solution {
//   sumOfLastN_Nodes(head, n) {
//     let sum = 0;
//     let length = 0;
//     let current = head;
//     while (current) {
//       length++;
//       current = current.next;
//     }
//     let lastN = length - n;
//     length = 0;
//     while (head) {
//       length++;
//       if (length > lastN) sum += head.data;
//       head = head.next;
//     }

//     return sum;
//   }
// }

// TODO: find the starting node of a loop in linked list

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

//       if (fast == slow) {
//         isCyclic = true;
//       }
//     }

//     let p1 = head;
//     let p2 = head;

//     while (count > 0) {
//       p2 = p2.next;
//       count--;
//     }

//     while (true) {
//       if (p1 == p2) return p1.data;
//       p1 = p1.next;
//       p2 = p2.next;
//     }
//   }
// }

// TODO: check if two linked list are identical
// class Solution {
//     //Function to check whether two linked lists are identical or not.
//     areIdentical(head1, head2)
//     {
//         while(head1 ||  head2){
//             if(!head1 || !head2) return false
//             if(head1.data !== head2.data){
//                 return false;
//             }
//             head1 = head1.next
//             head2 = head2.next
//         }
//         return true
//     }
// }

// TODO: Insert node at the middle of the linked list
// class Solution {
//     //Function to insert a node in the middle of the linked list.
//     insertInMiddle(head, x)
//     {
//         let newNode = new Node(x)
//         let count = 0;
//         let current = head;
//         while(current){
//             count++;
//             current = current.next;
//         }
//         let middleIndex = count % 2 == 0 ? (count / 2) : ((count - 1) / 2) + 1;
//         count = 1;
//         current = head

//         while(current){
//             if(count == middleIndex){
//                  let nextInd = current.next;
//                  current.next = newNode;
//                  newNode.next = nextInd
//             }
//             current = current.next;
//             count++
//         }

//         return head
//     }

// }

// TODO: delete the middle node in linked list

// class Solution {
//     deleteMid(node)
//     {
//         let count = 0
//         let current = head;

//         while(current){
//             count++;
//             current = current.next;
//         }

//         let middleIndex = count % 2 == 0 ? (count / 2) + 1 : ((count - 1) / 2) + 1;

//         for(let i = 1; i< middleIndex - 1; i++){
//             head = head.next;
//         }

// head.next = head.next.next;
//         return head

//     }
// }

// TODO:  delete duplicate form a sorted linked list;

// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   removeDuplicates(head) {
//     let current = head;

//     while (current) {
//       if (current.next && current.data == current.next.data) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }

//     return head;
//   }
// }



// TODO:  delete duplicate form a unsorted linked list;


// class Solution {
//   //Function to remove duplicates from unsorted linked list.

//   removeDuplicates(head) {
//     let hashTable = {};
//     let current = head;
//     while (current) {
//       if (!hashTable[current.data]) hashTable[current.data] = true;

//       if (current.next && hashTable[current.next.data]) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }

//     return head;
//   }
// }
