// Building an Ocean view


function getOceanView(heights){
    let stack = [];
    for(let i=0; i< heights.length; i++){
        while( stack.length && heights[i] >= heights[stack[stack.length-1]]){
            stack.pop();
        }
        
        stack.push(i);
    }
    
    return stack;
}


console.log(getOceanView([50, 40, 10, 30]))