

//
// TreeTraversal starts at line number *66*
//




class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            var current = this.root
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return this
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value){
        let current = this.root, found = false;

        if(!this.root) return false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true
            }
        }
        if(!found) return undefined;
        return current;
    }

    // BFs starts here:-
    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSpreOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSpostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSinOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}

let tree = new binarySearchTree();
// tree.insert(50)
// tree.insert(30)
// tree.insert(20)
// tree.insert(70)
// console.log(tree.BFS());
