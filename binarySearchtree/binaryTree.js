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
}

let tree = new binarySearchTree();
tree.insert(50)
tree.insert(30)
tree.insert(20)
tree.insert(70)
console.log(tree);