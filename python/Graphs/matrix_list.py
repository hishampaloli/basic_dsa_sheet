graph = {
    "A": ["A", "B", "C"],
    "B": ["A", "C", "D"],
    "C": ["A", "B", "E"],
    "D": ["C", "D"],
    "E": ["B", "E"],
}

keys = sorted(graph.keys())
size = len(keys)
matrix = [[0] * size for _ in range(size)]
print(matrix)
for k, vals in graph.items():
    for val in vals:
        a= keys.index(k)
        b= keys.index(val)
        matrix[a][b] = 1
print(matrix)

# # Graph via adjacency list
# graph = {
#     "A": ["A", "B", "C"],
#     "B": ["A", "C", "D"],
#     "C": ["A", "B", "E"],
#     "D": ["C", "D"],
#     "E": ["B", "E"],
# }

# keys = sorted(graph.keys())
# size = len(keys)

# matrix = [[0] * size for i in range(size)]

# # We iterate over the key:value entries in the dictionary first,
# # then we iterate over the elements within the value
# for a, b in [(keys.index(a), keys.index(b)) for a, row in graph.items() for b in row]:
#     # Use 1 to represent if there's an edge
#     # Use 2 to represent when node meets itself in the matrix (A -> A)
#     matrix[a][b] = 2 if (a == b) else 1

# print(matrix)