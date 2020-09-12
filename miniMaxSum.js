function miniMaxSum (arr){
    let maxNo = Math.max(...arr);
    let miniNo = Math.min(...arr);
    let totalSum = arr.reduce(
        (a,b)=>a+b
    );
        let maxSum = totalSum-miniNo;
        let miniSum = totalSum -maxNo;
    console.log([miniSum, maxSum].join(' '));

}
miniMaxSum([1,5,6,7,9])