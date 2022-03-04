const { now } = require("mongoose");

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push methed is used to to put a new value at the end of the list...
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // pop method is used to pop the last value of the list...
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head =null;
            this.tail = null;
        }
        return current;
    }
    //shift is used to pop the first value of the list...
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return this;
    }
    //unshift is used to push a new value at the start...
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }
    //get is used to get the value from the index...
    get(index){
        if(index < 0 || index >= this.length) return null
        let count = 0;
        let current = this.head;
        while(count !== index){
            current = current.next;
            count++
        }
        return current;
    }
}

var list = new singlyLinkedList();
list.push("786");
list.push("ready")
list.push("to go...")

console.log(list.unshift("efd"));

