/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let isAnagram = (s1, s2) => {
        let h1 = {};
        let h2 = {};
        if(s1.length != s2.legth){
            return false;
        }
        for(let letter of s1){
            if(s1[letter]){
                s1[letter] += 1;
            }else{
                s1[letter] = 1;
            }
        }

        for(let letter of s2){
            if(s2[letter]){
                s2[letter] += 1;
            }else{
                s2[letter] = 1;
            }
        }

        for(let key in h1){
            if(h1[key] != h2[key]){
                return false
            }
        }

        return true;
    }

    if(words.length == 1){
        return words
    }

    let index = 1;
    while(index < words.length){
        if(isAnagram(words[index], words[index-1])){
            words.splice(index, 1);
            index = 1;
        }
    }

    return words;
};