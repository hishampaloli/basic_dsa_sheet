class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def isempty(self):
        return self.head == None

    def enqueue(self, data):
        node = Node(data)
        if self.isempty():
            self.head = node
            self.tail = self.head
        else:
            self.tail.next = node
            self.tail = node

    def dequeue(self):
        if self.isempty():
            print("Sorry Stack is Empty")
            return
        else:
            self.head = self.head.next
        
    def peek(self):
        if self.isempty():
            print("Sorry Stack is Empty")
            return
        else:
            print(self.head.data)
            return self.head.data

    def display(self):
        itr = self.head
        qls = ''
        while itr:
            qls += str(itr.data) + "<-"
            itr = itr.next
        print(qls)


if __name__ == "__main__":
    q = Queue()
    q.enqueue(10)
    q.enqueue(11)
    q.enqueue(12)
    q.enqueue(13)
    q.display()
    q.dequeue()
    q.enqueue(14)
    q.peek()
    q.display()

