"""

"""

class HashTable:

    def __init__(self):
        self.MAX = 10
        self.arr = [None for _ in range(self.MAX)]

    def get_hash(self, key):
        h = 0;
        for char in key:
            h += ord(char)
        return h % self.MAX

    def __getitem__(self, index):
        h = self.get_hash(index)
        return self.arr[h]
    
    def __setitem__(self, key, val):
        h = self.get_hash(key)
        self.arr[h] = val

    def __delitem__(self, key):
        h =self.get_hash(key)
        self.arr[h] = None


if __name__ == "__main__":
    h = HashTable()
    h["kerala"] = "trivandrum"
    h["tamil Nadu"] = "chennai"
    print(h.arr)
