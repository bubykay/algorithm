function timeConversion (s){
    let splited = s.split(':')
    let reg = splited[2].split(/([0-9]+)/);
    let hh = splited[0];
    let mm = splited[1];
    let ss = reg[1];
    let ampm = reg[2].toLowerCase()
    if(hh===12 && ampm === 'am'){
        hh = '00'
    } else if (hh<12 && ampm == 'pm'){
        hh = parseInt(hh) + 12;
    }
    let timeT = `${hh}:${mm}:${ss}`;
    console.log(timeT);
}


timeConversion('07:05:45pm')