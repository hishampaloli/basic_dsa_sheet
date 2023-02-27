class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let value = char.charCodeAt(0)
      total = (total * 51 + value) % this.keyMap.length;
    }
    return total;
  }
    
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
      return "value setted in" + index
  }
    
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      return this.keyMap[index]
    }
    return undefined;
  }
}

let ht = new HashTable(17);

ht.set("student","hisham")
ht.set("hi","HI")
ht.set("hello","THIS IS HELLO")
ht.get("hello")
