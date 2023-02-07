class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}


class WeightedGraph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if(!this.list[vertex]) this.list[vertex] = []
    }

    addEdge(v1, v2, weight){
        if (!this.list[v1]) {
            this.addVertex(v1)
            this.list[v1].push({node: v2, weight})
        }else {
            this.list[v1].push({node: v2, weight})
        }

        if (!this.list[v2]) {
            this.addVertex(v2)
            this.list[v2].push({node: v1, weight})
        }else {
             this.list[v2].push({node: v1, weight})
        }             
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []
        let smallest;
        let pathDist

        for(let vertex in this.list) {
            if(vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null            
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.list[smallest]){
                    let nextNode = this.list[smallest][neighbor];
                    
                    let candidate = distances[smallest] + nextNode.weight
                    
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate 
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                 }
            }
        }

        return path.concat(smallest).reverse()
        
    }
}
