function compareTriblet(c,d) {
    let result = [];
    let a = 0;
    let b = 0;
    for(let i = 0; i<=2; i++){
        if(c[i]>d[i]){
            a += 1
        }else if(c[i]<d[i]){
            b += 1
        }
    }
    result.push(a);
    result.push(b);
    return result.join(' ')
    
}

console.log(compareTriblet([17,28,30],[99,16,8]))