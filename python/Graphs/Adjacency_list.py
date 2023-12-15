from collections import deque

class Vertex:
    def __init__(self,data):
        self.data = data
        self.next = None

class Graph:
    def __init__(self, count):
        self.count= count
        self.graph_arr = [None] * self.count
        

    def add_edge(self, source, destination):
        node = Vertex(destination)
        node.next = self.graph_arr[source]
        self.graph_arr[source] = node

        #undirected Graph
        node = Vertex(source)
        node.next = self.graph_arr[destination]
        self.graph_arr[destination] = node

        # self.filled += 1 

    def bfs(self, root):
        visited = []
        queue = deque([root])
        while queue:
            vertex = queue.popleft()
            if vertex not in visited:
                visited.append(vertex)
            temp = self.graph_arr[vertex]
            while temp:
                if temp.data not in visited:
                    queue.append(temp.data)
                temp = temp.next
        return visited

    def dfs(self, root, visited=[]):
        if root not in visited:
            visited.append(root)
            temp = self.graph_arr[root]
            while temp:
                self.dfs(temp.data , visited)
                temp = temp.next
                if len(visited) == self.count:
                    return visited

    def print_graph(self):
        for i in range(self.count):
            print(f" LIst of Vertex {i}\n")
            temp = self.graph_arr[i]
            while temp:
                print(f"-> {temp.data}", end="")
                temp = temp.next
            print("\n")

    def print_graph_node(self, node):
        temp = self.graph_arr[node]
        print(f"the node linked to {node}")
        while temp:
            
            print("->"+str(temp.data), end="")
            temp = temp.next

# Driver Code
if __name__ == "__main__":
    graph = Graph(4)
    graph.add_edge(0,1)
    graph.add_edge(1,2)
    graph.add_edge(2,3)
    graph.add_edge(3,0)
    graph.add_edge(1,3)
    graph.print_graph()
    graph.print_graph_node(3)
    print(graph.bfs(1))
    print(graph.dfs(0))
