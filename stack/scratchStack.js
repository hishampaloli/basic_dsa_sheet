class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    shift(){
        if(!this.first) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        let temp = this.first;
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

let list = new Stack();

console.log(list.unshift("786"));
console.log(list.unshift("ready"));
console.log(list);
console.log(list.shift());
console.log(list);