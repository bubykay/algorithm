function findLongestWordLength (word){
    let k = word.split(' ')
    //added spread operator "..." to the max method
    return Math.max(...k.map(b=>b.length))
}
console.log(findLongestWordLength('I am the most beautiful'))