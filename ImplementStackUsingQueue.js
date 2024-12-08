
var MyStack = function() {
    this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.storage.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.storage.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.storage.length == 0){
        return null
    }
    return this.storage[this.storage.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (this.storage.length==0)
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */