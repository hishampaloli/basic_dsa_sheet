from collections import deque

class Stack:
    def __init__(self):
        self.elements = deque()
    
    def isempty(self):
        return len(self.elements) == 0
    
    def push(self, data):
        self.elements.append(data)

    def pop(self):
        if not self.isempty():
            # print(self.elements.pop())
            return self.elements.pop()
        else:
            print("this is empty")

    def print(self):
        print(self.elements)

    def length(self):
        return len(self.elements)


if __name__ == "__main__":
    s = Stack()
    string = "malayalam"
    flag=0
    mid = len(string)//2
    
    if len(string) %2 == 1:
        for i in range(len(string)):
            if i == (mid):
                pass
            elif i < mid:
                s.push(string[i])
            else:
                if s.pop() != string[i]:
                    flag=1
                    break;
        
    else:
        for i in range(len(string)):
            if i < (mid):
                s.push(string[i])
            else:
                if s.pop() != string[i]:
                    flag=1
                    break;

    print("Palindrome") if flag == 0 else print("Not palindrome")


