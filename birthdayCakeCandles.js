function birthdayCakeCandles(candle){
    let tallest = Math.max(...candle)
    let counter = 0;
    candle.map(
        x=>{
            if(x===tallest){
                counter++
            }
        }
    )
    return counter
}

console.log(birthdayCakeCandles([3,9,100,30, 100,100,100]))