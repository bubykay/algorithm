function gradingStudent(grades){
    var finalGrade = [];
    finalGrade = grades.map( x => {
        if(Math.ceil(x/5)*5 -x <3 && x >= 38){
            return Math.ceil(x/5)*5
        }else{
            return x;
        }
    })
    return finalGrade;

}
console.log(gradingStudent([4,73,67,38,33, 99]))