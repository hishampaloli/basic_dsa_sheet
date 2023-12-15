from collections import deque

class Queue:
    def __init__(self):
        self.elements = deque()

    def enqueue(self, val):
        self.elements.appendleft(val)

    def dequeue(self):
        if self.is_empty():
            self.elements.pop()
        else:
            print("empty string")

    def is_empty(self):
        return len(self.elements) == 0

    def size(self):
        return len(self.elements)

    def display(self):
        print([ i for i in self.elements])

q = Queue()
q.enqueue({ 'stock': 'tata motors', 'price': 123.45})
q.enqueue({ 'stock': 'tata steel', 'price': 145.45})
q.enqueue({ 'stock': 'TCS', 'price': 146.89})

q.display()