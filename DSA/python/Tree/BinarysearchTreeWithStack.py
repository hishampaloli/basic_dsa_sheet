from collections import  deque
""" Here we do traversal using the stack without using recusrion"""

class BinarySearchTreeNode:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None

def add_child(tree, data):
        if data == tree.data:
            return
        
        if data < tree.data:
            # add data in left sub tree
            if tree.left:
                add_child(tree.left , data)
            else:
                tree.left = BinarySearchTreeNode(data)

        else:
            # add data in right sub tree
            if tree.right:
                add_child(tree.right, data)
            else:
                tree.right = BinarySearchTreeNode(data)
        
def build_tree(element):
    root = BinarySearchTreeNode(element[0])

    for i in range(1, len(element)):
        add_child(root, element[i])

    return root


# def pre_order_traversal_using_stack(tree):
#     stack = deque()

#     if