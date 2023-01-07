  class UndirectionalGraph {
     constructor() {
         this.list = {};
     }
     addVertex(vertex){
         if(!this.list[vertex]) this.list[vertex] = []
     }

     

     addEdge(v1, v2) {
         
         if(!this.list[v1]) {
             this.addVertex(v1)
             this.list[v1].push(v2)
         }else {
             this.list[v1].push(v2)
         }

         

         if (!this.list[v2]) {
             this.addVertex(v2)
             this.list[v2].push(v1)
         }else {
             this.list[v2].push(v1)
         }
         
     }    


     removeEdge(v1, v2) {
         if (!this.list[v1]) return 'No such vertex'
         if (!this.list[v2]) return 'No such vertex'
                      
         this.list[v1] = this.list[v1].filter(v => v !== v2)
         this.list[v2] = this.list[v2].filter(v => v !== v1)         
     }

     removeVertex(v) {
         if (!this.list[v]) return null;
         
        while (this.list[v].length) {
            const adjVertex = this.list[v].pop();            
            this.removeEdge(v, adjVertex)
        }
         delete this.list[v]
         
     }

     DFSRecursive(start){
         const result = []
         const visited = {}
         const list = this.list
       function dfs(vertex){
             if (!vertex) return null
                 visited[vertex] = true
                 result.push(vertex)
             list[vertex].forEach(neighbor => {
                 if(!visited[neighbor]){
                     return dfs(neighbor)
                 }
             })
             
             
         }
         dfs(start)
         return result
     } 


     DFSIterative(start) {

          const stack = [start]
         const result = [];
         const visited = {}
         let currentVertex

         visited[start] = true
         while(stack.length){
             currentVertex = stack.pop()
             result.push(currentVertex);

             this.list[currentVertex].forEach(neighbor => {
                 if(!visited[neighbor]){
                     visited[neighbor] = true
                     stack.push(neighbor);
                 }
             })
         }
         return result
     }

     BFS(start) {
         const queue = [start]
         const result = [];
         const visited = {};
          visited[start] = true
         
         let currentVertex

         while(queue.length){
             currentVertex = queue.shift();
             result.push(currentVertex);

             this.list[currentVertex].forEach(neighbor => {
                  console.log(visited[neighbor])
                 if(!visited[neighbor]){
                     visited[neighbor] = true
                     queue.push(neighbor)
                 }
             })
         }
         return result
     }
     
 }
