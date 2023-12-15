class BinarySearchTreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

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

def in_order_traversal(tree):

    if tree:

        #visit left tree
        if tree.left:
            in_order_traversal(tree.left)
        
        #visit base node
        print(tree.data, end=" ")

        #visit right tree
        if tree.right:
            in_order_traversal(tree.right)

def pre_order_traversal(tree):

    if tree:
        #visit base tree
        print(tree.data, end=" ")

        #visit left tree:
        if tree.left:
            pre_order_traversal(tree.left)

        #visit right tree
        if tree.right:
            pre_order_traversal(tree.right)

def search(tree, val):
        if tree.data == val:
            return True

        if val < tree.data:
            if tree.left:
                return search(tree.left, val)
            else:
                return False
        else:
            if tree.right:
                return search(tree.right, val)
            else:
                return False

def find_min(tree):
        if tree.left:
            return find_min(tree.left)
        return tree.data

def find_max(tree):
    if tree.right:
        return find_max(tree.right)
    return tree.data

def calculate_sum(tree):
    left = calculate_sum(tree.left) if tree.left else 0
    right = calculate_sum(tree.right) if tree.right else 0
    return tree.data + left + right
        

if __name__ == "__main__":
    numbers = [14, 23, 54, 12, 1, 65, 6, 90, 32, 75]
    # names  = ["Arun", "renjith", "Manu", "Manohar", "Kiran", "Prabakar", "Aabass"]
    # numbers_tree  = build_tree(names)
    numbers_tree = build_tree(numbers)
    print(in_order_traversal(numbers_tree))
    print(pre_order_traversal(numbers_tree))
    print(search(numbers_tree, 32))
    print(find_max(numbers_tree))
    print(find_min(numbers_tree))
    print(calculate_sum(numbers_tree))
