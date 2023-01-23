class Node:
    def __init__(self, char):
        self.char = char
        self.children = {}
        self.iscomplete = False

class Trie:
    def __init__(self):
        self.root = Node("")

    def insert(self, word):
        node = self.root
        for char in word:
            if char in node.children:
                node = node.children[char]
            else:
 
                new_node = Node(char)
                node.children[char] = new_node
                node = new_node
        node.iscomplete = True

    def dfs(self, node, pre):
 
       if node.iscomplete:
           self.output.append((pre + node.char))
        
       for child in node.children.values():
           self.dfs(child, pre + node.char)

    def search(self, x):
        
        node = self.root
         
        for char in x:
            if char in node.children:
                node = node.children[char]
            else:
                return []
         
        self.output = []
        self.dfs(node, x[:-1])
 
        return self.output


tr = Trie()
tr.insert("here")
tr.insert("hear")
tr.insert("he")
tr.insert("hello")
tr.insert("how ")
tr.insert("her")

print(tr.search("hello"))