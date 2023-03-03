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
  