function plusMinus(arr){
    let negatives =0; 
    let positives = 0;
    let zeros = 0;
    let arrLength = arr.length;
    arr.map((ele)=>
        {
            if(ele>0){
                positives++;
            }else if(ele<0){
                negatives++;
            } else{
                zeros++
            }
            return ele
        }
    )
    let negativesNo = Number.parseFloat(negatives/arrLength).toPrecision(6);
    let positivesNo = Number.parseFloat(positives/arrLength).toPrecision(6);
    let zerosNo = Number.parseFloat(zeros/arrLength).toPrecision(6);

    return console.log(positivesNo + '\n' + negativesNo + '\n' + zerosNo)
}
plusMinus([-4, 3, -9, 0, 4, 1])