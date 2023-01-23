class MaxHeap:

    def __init__(self, items=[]):
        self.heap = [0]
        for i in items:
            self.heap.append(i)
            self.__floatUp(len(self.heap)- 1)
    
    def push(self, data):
        self.heap.append(data)
        self.__floatUp(len(self.heap) -1)

    def peek(self):
        if self.heap[1]:
            return self.heap[1]
        else:
            return False
