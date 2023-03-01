
//TODO: get nth node from the end

class Solution {
    
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
