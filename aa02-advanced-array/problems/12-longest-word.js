/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:



*/

let longestWord = function(sentence) {
    // Your code here
    let split1 = sentence.split(' ');
    let reduce = split1.reduce((acc, cur) => {
        //console.log(acc, cur)
        if (acc.length >= cur.length) {
        return acc
        } else {
         return cur
        }
        
    })
    return reduce
};

// Your code here 

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
