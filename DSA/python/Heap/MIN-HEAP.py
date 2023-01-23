class MinHeap:
    def __init__(self):
        self.heap = []

    def push(self, val):
        self.heap.append(val)
        self.heapify_up()

    def pop(self):
        if self.heap:
            min_val = self.heap[0]
            self.heap[0] = self.heap.pop()
            self.heapify_down()
            return min_val

    def heapify_up(self):
        idx = len(self.heap) - 1
        while idx > 0:
            parent_idx = (idx - 1) // 2
            if self.heap[parent_idx] > self.heap[idx]:
                self.heap[parent_idx], self.heap[idx] = self.heap[idx], self.heap[parent_idx]
                idx = parent_idx
            else:
                break

    def heapify_down(self):
        idx = 0
        while idx < len(self.heap):
            left_child_idx = 2 * idx + 1
            right_child_idx = 2 * idx + 2
            min_idx = idx
            if left_child_idx < len(self.heap) and self.heap[left_child_idx] < self.heap[min_idx]:
                min_idx = left_child_idx
            if right_child_idx < len(self.heap) and self.heap[right_child_idx] < self.heap[min_idx]:
                min_idx = right_child_idx
            if min_idx != idx:
                self.heap[idx], self.heap[min_idx] = self.heap[min_idx], self.heap[idx]
                idx = min_idx
            else:
                break

if __name__ == "__main__":
    a = MinHeap()
    a.push(3)
    a.push(9)
    a.push(4)
    a.push(5)
    a.push(2)
    print(a.heap)