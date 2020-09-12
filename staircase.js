function staircase (n){
    let s = '[', b =[], line = ' ';
    for(let i = 0; i<=n; i++){
        b.push(s.repeat(i))
    }
    b.map(
        x =>{
            if(x.length>0){
               let lengtho = n - x.length;
                console.log(line.repeat(lengtho)+x)
            }
        }
    )
}

staircase(20);