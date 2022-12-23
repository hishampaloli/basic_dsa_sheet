class Node:
    def __init__(self, data=None, prev = None, next=None,):
        self.data = data
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def isEmpty(self):
        return self.head == None

    def inserttoEnd(self, data):
        node = Node(data)
        if self.isEmpty():
            self.head = node
            self.tail = self.head
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node

    def inserttoStart(self,data):
        node = Node(data)
        if self.isEmpty():
            self.head = node
            self.tail = self.head
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node


    def insertatPosition(self, data, index):

        if index< 0 or index>= self.getLength():
            raise Exception("index out of index")

        if index == 0:
            self.inserttoStart(data)
            return
        count = 0
        itr = self.head
        node = Node(data)
        while itr:
            if count == index - 1:
                itr.next.prev = node
                node.prev = itr
                node.next = itr.next
                itr.next = node
                print(f"{data} is added at index: {index}")
                return
            itr = itr.next 
            count+=1

    def printforward(self):
        itr = self.head
        dlstr = ''
        while itr:
            dlstr += str(itr.data) + '->'
            itr = itr.next
        print(dlstr)

    def printbackward(self):
        itr = self.tail
        dlstr = ''
        while itr:
            dlstr += str(itr.data) + "->"
            itr = itr.prev
        print(dlstr)

    def getLength(self):
        count = 0
        if self.isEmpty():
            return count
        else:
            itr  = self.head
            while itr:
                count+=1
                itr = itr.next
            return count
    
    def deletebyValue(self, val):
        itr = self.head
        while itr.next:
            if itr.next.data == val:
                # print(itr.next.next.data)
                itr.next = itr.next.next
                itr.next.prev = itr 
            itr = itr.next  

if __name__ == "__main__":
    dl = DoublyLinkedList()
    dl.inserttoStart(100)
    dl.inserttoStart(101)
    dl.inserttoEnd(50)
    dl.inserttoEnd(51)
    dl.printforward()
    dl.printbackward()
    dl.insertatPosition(501, 3)
    dl.printforward()
    dl.printbackward()
    dl.inserttoStart(6)
    dl.inserttoEnd(15)
    dl.inserttoEnd(45)
    dl.deletebyValue(15)
    dl.printforward()
    dl.printbackward()



