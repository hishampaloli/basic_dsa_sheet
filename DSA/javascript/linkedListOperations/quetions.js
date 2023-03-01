class Solution {
  //Function to find the data of nth node from the end of a linked list
  getNthFromLast(head, n) {
    let index = 0;
    let countHead = head;
    while (countHead) {
      countHead = countHead.next;
      index++;
    }

    let nodeIndex = index - n + 1;
    index = 1;

    if (nodeIndex <= 0) return -1;

    while (head) {
      if (index === nodeIndex) {
        return head.data;
      } else {
        index++;
        head = head.next;
      }
    }
  }
}
