class Node {
    constructor() {
        this.childern = {}
        this.isWordEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            let charToInsert = word[i];
            if (!(charToInsert in curr.childern)) {
                curr.childern[charToInsert] = new Node()
            }        
            curr = curr.childern[charToInsert]
        }
        curr.isWordEnd = true        
    }


    contains(word) {
         let curr = this.root;
        for(let i = 0; i < word.length; i++){
            let charToFind = word[i];
            if (!(charToFind in curr.childern)) {
                return false  
            }

            curr = curr.childern[charToFind]
        }

        return curr.isWordEnd
    }

    startWithPrefix(prefix) {
               let curr = this.root;
        for(let i = 0; i < prefix.length; i++){
            let charToFind = prefix[i];
            if (!(charToFind in curr.childern)) {
                return false  
            }

            curr = curr.childern[charToFind]
        }
        return curr

    }
}
