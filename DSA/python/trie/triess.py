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
