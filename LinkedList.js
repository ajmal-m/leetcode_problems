

class Node{

    constructor(data){
        this.val = data;
        this.next = null;
    }
}


let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);

n1.next = n2;
n2.next = n3;


let temp = n1;

while(temp){
    console.log("Val--> ", temp.val);
    temp = temp.next;
}