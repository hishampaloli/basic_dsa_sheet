// TODO: reverse doubly linked list

// class Solution {
//     reverseDLL(head){
//     let temp = null;
//     let current = head;

//     while (current != null) {
//         temp = current.prev;
//         current.prev = current.next;
//         current.next = temp;
//         current = current.prev
//     }

//     if (temp != null) {
//       head = temp.prev;
//     }
//      return head
//     }
//   }


// TODO: delete a node from DLL
// class Solution {
//   deleteNode(head, position) {
//     if (head === null) {
//       return;
//     }

//     let current = head;
//     let count = 1;

//     while (current !== null && count < position) {
//       current = current.next;
//       count++;
//     }

//     if (current === null) {
//       return;
//     }

//     if (current === head) {
//       head = current.next;
//       if (head !== null) {
//         head.prev = null;
//       }
//     } else {
//       current.prev.next = current.next;
//       if (current.next !== null) {
//         current.next.prev = current.prev;
//       }
//     }

//     return head;
//   }
// }
