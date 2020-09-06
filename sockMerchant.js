function sockMerchant(n, ar) {  
    var socks = {};  
    var pairs = 0;
    for (var i of ar) {  
        socks[i] = socks[i] + 1 || 1;    
        if (socks[i] % 2 === 0) {      
            pairs += 1;   
         }  }
         return pairs;
        }
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))