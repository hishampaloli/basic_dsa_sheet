def dfs(graph, root, visited = []):
    if root not in visited:
        # print(root)
        visited.append(root)
        for neighbour in graph[root]:
            dfs(graph, neighbour, visited)
   
if __name__ == "__main__":
    graph = {0: [1, 2, 3, 5], 1:[0, 2, 5], 2:[0,1,4], 3:[0], 4:[2], 5: [1, 0]}
    dfs(graph, 0)