

var reverseWords = function (s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let nameArr = [...arr[i]].reverse();
        arr[i] = nameArr.join("")
    }
    return arr.join(" ")
};