class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next

class Stack:
    def __init__(self):
        self.top = None

    def isempty(self):
        return self.top == None

    def push(self, data):
        node = Node(data)
        if self.isempty():
            self.top = node
        else:
            node.next = self.top
            self.top = node

    def pop(self):
        if self.isempty():
            print('this stack is empty')
            return
        else:
            popped = self.top
            self.top = self.top.next
            print(popped.data)
            return popped

    def display(self):
        if self.isempty():
            print('this stack is empty')
            return
        else:
            itr = self.top
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