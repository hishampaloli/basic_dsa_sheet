class Graph:
    def __init__(self, edges):
        self.edges = edges
        self.graph = {}
        for start , end in self.edges:
            if start in self.graph:
                self.graph[start].append(end)
            else:
                self.graph[start] = [end]

        print("Graph dictnary: ", self.graph)

    def get_path(self, start, end, path= []):

        path = path + [start]

        if start == end:
            return path
        
        if start not in self.graph:
            return []

        paths = []

        for node in self.graph[start]:
            if node not in path:
                new_path = self.get_path(node, end,path)
                for p in new_path:
                    paths.append(p)

        return paths

if __name__ == "__main__":
    # routes = [
    #     ("Mumbai","Pune"),
    #     ("Mumbai", "Surat"),
    #     ("Surat", "Bangaluru"),
    #     ("Pune","Hyderabad"),
    #     ("Pune","Mysuru"),
    #     ("Hyderabad","Bangaluru"),
    #     ("Hyderabad", "Chennai"),
    #     ("Mysuru", "Bangaluru"),
    #     ("Chennai", "Bangaluru")
    # ]
    routes = [
        ("Mumbai", "Paris"),
        ("Mumbai", "Dubai"),
        ("Paris", "Dubai"),
        ("Paris", "New York"),
        ("Dubai", "New York"),
        ("New York", "Toronto"),
    ]
    obj = Graph(routes)
    print("path ", obj.get_path("Mumbai", "New York"))
    

