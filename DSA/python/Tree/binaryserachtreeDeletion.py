"""
Deletion on binary search tree
On deletion what we do is we replace the deleted node with either value from
1) the least value from the right subtree.
2) or the largest value form the left subtree.
"""

class BinarySearchTreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def add_node(self, data):

        if data == self.data:
            return
        
        if data < self.data:
            if self.left:
                self.left.add_node(data)
            else:
                self.left = BinarySearchTreeNode(data)

        else:
            if self.right:
                self.right.add_node(data)
            else:
                self.right = BinarySearchTreeNode(data)

    def min_val(self):
        if self.left:
            return self.left.min_val()
        return self.data

    def max_val(self):
        if self.right:
            return self.right.max_val()
        return self.data

    def inorder_traversal(self):
        elements = []

        #first look on left subtree:
        if self.left:
            elements += self.left.inorder_traversal()
        
        #then add the base node
        elements.append(self.data)

        #last look on the right subtree
        if self.right:
            elements += self.right.inorder_traversal()

        return elements

    # def delete(self, data):

    #     if data < self.data:
    #         if self.left:
    #             self.left = self.left.delete(data)

    #     elif data > self.data:
    #         if self.right:
    #             self.right = self.right.delete(data)
        
    #     else:
    #         if self.left is None and self.right is None:
    #             return None
    #         if self.right is None:
    #             return self.left
    #         if self.left is None:
    #             return self.right
            
    #         max_val = self.left.max_val()
    #         self.data = max_val
    #         self.left = self.left.delete(max_val)
        
    #     return self

    def delete(self, data):
        if data < self.data:
            if self.left:
                self.left = self.left.delete(data)

        elif data > self.data:
            if self.right:
                self.right = self.right.delete(data)

        else:
            if self.left is None and self.right is None:
                return None
            if self.left is None:
                return self.right
            if self.right is None:
                return self.left

            min_value = self.right.min_val()
            self.data = min_value
            self.right = self.right.delete(min_value)
        
        return self

def create_tree(dataList):

    root = BinarySearchTreeNode(dataList[0])

    for i in range(1, len(dataList)):
        root.add_node(dataList[i])

    return root

if __name__ == "__main__":
    dataList = [10, 4, 67, 50, 23, 66, 39, 92, 101, 0, 56, 82, 67, 66, 50]
    data = create_tree(dataList)
    print(dataList)
    data.delete(10)
    # print(data.min_val())
    # print(data.max_val())
    print(data.inorder_traversal())