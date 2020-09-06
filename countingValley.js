function countingValleys(n, s) {
    var elevation = 0;
    var valley = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === "D") {
            --elevation;
        } else if (s[i] === "U") {
            if (++elevation === 0) valley++;
        }
    }
    return valley;
}
console.log(countingValleys(8, ['UDDDUDUU']))