from collections import deque

class Stack:
    def __init__(self):
        self.elements = deque()

    def is_empty(self):
        return len(self.elements) == 0

    def push(self, val):
        self.elements.append(val)

    def pop(self):
        if not self.is_empty():
            return self.elements.pop()

    def size(self):
        return len(self.elements)
        

def reverse_string(string):
    s = Stack()
    for i in string:
        s.push(i)
    rstr = ""
    while not s.is_empty():
        rstr += s.pop()

    return rstr


if __name__ == "__main__":
    s = Stack
    string= "We will conquere world"
    print(reverse_string(string))