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
    //set is used to set replace value in a given index...
    set(index,val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index == this.length) return this.push(val);
        if(index === 0) return this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next
        prev.next = newNode;
        newNode = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var prevousNode = this.get(index - 1);
        let current = this.get(index);
        prevousNode.next = current.next
        this.length--;
        return current;
        
        // 2-3-6-2-5
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }
}

var list = new singlyLinkedList();
list.push("786");
list.push("ready")
list.push("to go...")

console.log(list);

console.log(list.reverse()); 

