class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    // insert value into binary Tree
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this
        }
        let current = this.root;
        while(current){
            if(current.data === value){
                return undefined
            }
            if(current.data > value){
                if(current.left){
                    current = current.left;
                }else{
                    current.left = newNode
                    return this
                }
            }else{
                if(current.right){
                    current = current.right
                }else{
                    current.right = newNode
                    return this
                }
            }
        }
    }
    find(value){
        if(this.root === null){
            return false
        }
        let current = this.root;
        while(current){
            if(current.data === value){
                return true
            }
            if(current.data > value){
                current = current.left
            }else{
                current = current.right
            }
        }
        return false
    }
    display(){
        if(this.root === null){
            return this
        }
        
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(30);
bst.insert(40);
bst.insert(20);
console.log(bst)
console.log(bst.find(30))