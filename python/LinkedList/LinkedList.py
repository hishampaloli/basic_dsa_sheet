class Node:
    def __init__(self, data=None, next= None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def isEmpty(self):
        return self.head == None 

    def insert_at_start(self, data):
        node = Node(data)
        if self.isEmpty():
            self.head = node
            self.tail = self.head
        else:
            node.next = self.head
            self.head = node
    
    def insert_at_end(self, data):
        node = Node(data)
        if self.isEmpty():
            self.head = node
            self.tail = self.head
        else:
            self.tail.next = node
            self.tail = node

    def delete_value(self, val):
        if self.isEmpty():
            print("sorry the list is empty")
            return
        if self.head.data == val:
            self.head = self.head.next
            print(f"{val}  is removed")
            return 
        
        itr = self.head
        while itr.next:
            if itr.next.data == val:
                itr.next = itr.next.next
                print(f"{val}  is removed")
                return 
            itr = itr.next
        print(f"Sorry {val} is not in the list")

    def insert_at(self, data, index):

        if index< 0 or index>= self.get_length():
            raise Exception("index out of index")

        if index == 0:
            self.insert_at_start(data)
            return

        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                node = Node(data, itr.next)
                itr.next = node
                print(f"{data} is added at index: {index}")
                return
            itr = itr.next 
            count+=1
        
    def insert_after_value(self, val, data):
        itr = self.head
        node = Node(data)
        while itr:
            if itr.data == val:
                node.next = itr.next
                itr.next = node
                print(f"{data} is added after {val}")
                return
            itr = itr.next
        else:
            print("object is missing")

    def update(self, val, new_val):
        itr = self.head
        while itr:
            if itr.data == val:
                itr.data = new_val
                print("value is updated")
                return 
            itr = itr.next
        print("sorry no matching value found")

    def get_length(self):
        count = 0
        itr = self.head
        while itr:
            count +=1
            itr = itr.next

        print("length of the list is: ", count)    
        return count

    def print(self):
        itr = self.head
        llstr = ''
        while itr:
            llstr += str(itr.data) + "->"
            itr = itr.next
        print("Current linked list :" + llstr)
        




if __name__ == "__main__":
    ll = LinkedList()
    ll.insert_at_end(10)
    ll.insert_at_end(100)
    ll.insert_at_end(1000)
    ll.insert_at_end(10000)
    ll.insert_at_end(100000)
    ll.print()
    ll.insert_at_start(2)
    ll.insert_at_end(20)
    ll.delete_value(100)
    ll.delete_value(10)
    ll.delete_value(13)
    ll.print()
    ll.insert_after_value(1000, 1001)
    ll.print()
    ll.insert_at(301, 3)
    ll.insert_after_value(20, 2001)
    ll.update(301, 0)
    ll.get_length()
    ll.print()



    