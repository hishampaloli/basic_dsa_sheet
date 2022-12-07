class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next

class Stack:
    def __init__(self):
        self.head = None

    def isempty(self):
        return self.head == None

    def push(self, data):
        if self.isempty():
            self.head = Node(data, None)
        else:
            self.head = Node(data, self.head)

    def pop(self):
        if self.isempty():
            print('this stack is empty')
            return
        else:
            popped = self.head
            self.head = self.head.next
            print(popped.data)
            return popped

    def display(self):
        if self.isempty():
            print('this stack is empty')
            return
        else:
            itr = self.head
            stack_view = ''
            while itr:
                stack_view += str(itr.data) + '->'
                itr = itr.next
            print(stack_view)

if __name__ == "__main__":
    st = Stack()
    st.push(10)
    st.push(30)
    st.push(60)
    st.push(70)
    st.display()
    st.pop()
    st.display()