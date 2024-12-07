class Stack{
    constructor(){
        this.count = 0;
        this.strorage = {};
    }


    push(value){
        this.strorage[this.count] = value;
        this.count++;
    }

    pop(){
        if(this.count == 0){
            return undefined
        }
        this.count--;
        let res = this.strorage[this.count];
        delete this.strorage[this.count];
        return res;
    }

    size(){
        return this.count;
    }

    peak(){
        return this.strorage[this.count-1];
    }

    display(){
        return this.strorage;
    }
}


const stack = new Stack();

stack.push(55);

stack.push(89);

console.log(stack.peak());

stack.push(78);

stack.push(67);


stack.push("ueyriuy32iury2");




console.log(stack.peak());

// stack.pop();

console.log(stack.peak());


// console.log(stack.display());