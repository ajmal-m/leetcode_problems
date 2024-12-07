function isPalindrome(str){
    let letters = [];
    let reverseWord = "";

    for (let index = 0; index < str.length; index++) {
        letters.push(str[index]);
    }


    for (let index = 0; index < str.length; index++) {
        reverseWord += letters.pop();
    }

    if( reverseWord == str){
        return true;
    }else{
        return false;
    }

}


console.log(isPalindrome("ajdid"));