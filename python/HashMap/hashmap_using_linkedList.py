"""
hash table with chaining using Linked list
"""
class Node:
    def __init__(self, data=None, next = None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_at_end(self, val):
        node = Node(val)
        if self.head == None:
            self.head = node
            self.tail = self.head
        else:
            self.tail.next = node
            self.tail = node

    def print_data(self):
        itr = self.head
        llstr = '[ '
        while itr.data:
            llstr += str(itr.data) + ", "
        llstr += ']'
        print(llstr)


class HashTable:
    def __init__(self, MAX):
        self.MAX = MAX
        self.data = [ None for _ in range(MAX)]

    def get_hash(self, key):
        h = 0;
        for char in key:
            h += ord(char)
        return h % self.MAX

    def __getitem__(self, index):
        h = self.get_hash(index)
        return self.arr[h]
    
    def __setitem__(self, key, val):
        h = self.get_hash(key)
        if self.data[h] == None:
            self.data[h] = LinkedList()
            self.data[h].add_at_end(val)
        else:
            self.data[h].add_at_end(val)

    def __delitem__(self, key):
        h =self.get_hash(key)
        self.data[h] = None

    # def print_hashmap(self):
    #     for dt in self.data:
    #         if dt is None:
    #             print(dt, end=", ")
    #         else:
    #             print(dt.print_data(), end=",")



if __name__ == "__main__":
    h = HashTable(10)
    h["kerala"] = "trivandrum"
    h["kerala"] = "kochi"
    h["tamil Nadu"] = "chennai"
    print(h.data)
    
