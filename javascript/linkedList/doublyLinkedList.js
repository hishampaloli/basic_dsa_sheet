class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let currentTail = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;

    }
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index <= (this.length)/2){
            let count = 0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
            return current;
        }else{
            let count = this.length - 1;
            let current = this.tail;
            while(count != index){
                current = current.prev;
                count--
            }return current;
        }
    }
    set(val,index){
        let foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true
        }
        return false;
    }
    insert(val,index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let newNode = new Node(val);
        let BeforeNode=  this.get(index-1);
        let afterNode = this.get(index);

        BeforeNode.next = newNode;
        newNode.prev = BeforeNode;       

        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        
        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }

}

let list = new DoublyLinkedList();

list.push("786");
list.push("ready");
list.push("to go...")
list.push("hooya")
console.log(list);
console.log(list.remove(2));

console.log(list);

