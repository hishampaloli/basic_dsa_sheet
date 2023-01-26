class MinHeap:
    def __init__(self):
        self.heap = [0]
        self.current_size = 0

    def shiftUp(self, i):
        """
        Move the value up in the tree to maintain the heap property
        """
        stop = False
        while (i // 2 > 0)  and stop == False:
            if self.heap[i] < self.heap[i//2]:
                self.heap, self.heap[i//2] = self.heap[i//2], self.heap[i]
            else:
                stop = True
            i = i// 2

    def insert(self, value):
        """
        insert a value into the heap 
        """
        self.heap.append(value)

        #increase the size of hte heap
        self.current_size +=1

        #move the elment to its position from bottom to the top
        self.shiftUp(self.current_size)

    def shiftDown(self, i):
        #if the current node has at least one child
        while (i * 2) <= self.current_size:
            #get the index of the min child of the current node
            mc = self.min_child(i)
            #swap the values of the curretn element os greater than its min child
            if self.heap[i] > self.heap[mc]:
                self.heap[i], self.heap[mc] = self.heap[mc], self.heap[i]
            i = mc

    def min_child(self, i):
        # if the curretn node has only one child return the child
        if (i*2)+ 1 > self.current_size:
            return i *2
        else:
            #here the curretn node has two children
            #return the idex of hte min child according to their values
            if self.heap[i*2] < self.heap[(i*2)+ 1]:
                return i*2
            else:
                return (i *2) + 1

    def delete_min(self):
        # Equal to 1 since the heap list was initialized with a value
        if len(self.heap) == 1:
            return 'Empty heap'
 
        # Get root of the heap (The min value of the heap)
        root = self.heap[1]
 
        # Move the last value of the heap to the root
        self.heap[1] = self.heap[self.current_size]
 
        # Pop the last value since a copy was set on the root
        *self.heap, _ = self.heap
 
        # Decrease the size of the heap
        self.current_size -= 1
 
        # Move down the root (value at index 1) to keep the heap property
        self.shiftDown(1)

        # Return the min value of the heap
        return root


"""
Driver program
"""
# Same tree as above example.
my_heap = MinHeap()
my_heap.insert(5)
my_heap.insert(6)
my_heap.insert(7)
my_heap.insert(9)
my_heap.insert(16)
my_heap.insert(13)
my_heap.insert(11)
my_heap.insert(10)
print(my_heap.heap)

print(my_heap.delete_min()) # removing min node i.e 5 