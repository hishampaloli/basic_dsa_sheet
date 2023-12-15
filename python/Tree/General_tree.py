"""
Top Node  is ROOT NODE

LeaF Node no sub category
"""  
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []
        self.parent = None

    def add_child(self, child):
        self.parent = self
        self.children.append(child)

    def get_level(self):
        level = 0
        p = self.parent
        while p:
            level += 1
            p = p.parent
        return level

    def print_tree(self):
        print(self.data)
        if self.children:
            for child in self.children:
                child.print_tree()

    
def build_product_tree():
    root = TreeNode("Electronics")

    laptop = TreeNode("Laptop")
    laptop.add_child(TreeNode("HP"))
    laptop.add_child(TreeNode("Lenova"))
    laptop.add_child(TreeNode("Dell"))

    mobile = TreeNode("Mobile")
    mobile.add_child(TreeNode("MI"))
    mobile.add_child(TreeNode("Samsung"))
    mobile.add_child(TreeNode("Apple"))

    tv = TreeNode("TV")
    tv.add_child(TreeNode("Realme"))
    tv.add_child(TreeNode("Lg"))
    tv.add_child(TreeNode("Panasonic"))

    root.add_child(laptop)
    root.add_child(mobile)
    root.add_child(tv)

    return root

if __name__ == "__main__":
    root = build_product_tree()
    print(root.get_level())
    # root.print_tree()
    pass