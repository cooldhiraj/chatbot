module.exports.depend = async function (inputs) {
    var newInputs = inputs.slice(1, inputs.length);
    var arr = newInputs;
    var score1 = 0;
    var score2 = 0;
    var Finalscore = 0;

    //adding array elements
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    var start = 0;
    var end = 3
    countArr = [];

    //counting how many times parts of words occurred
    for (var j = 1; j <= 2; j++) {
        var sArr = arr.slice(start, end);
        console.log("Slice array " + sArr);
        var count = sArr.reduce(reducer);
        countArr.push(count);
        if (!countArr.length == 0) {
            console.log("element count " + countArr[countArr.length - 1])
            switch (countArr[countArr.length - 1]) {
                case 0:
                    score1 += 0;
                    break;
                case 1:
                    score1 += 1;
                    break;
                case 2:
                    score1 += 0.5;
                    break;
                case 3:
                    score1 += 0.25;
                    break;
                default:
                    score1 = 0;
            }
        }

        start = end;
        end += 3;
    }


    //dependiblity check
    if (!inputs[0] == 0) {  //ing should be present in present matrix array
        for (var i = 0; i <= (((inputs.length) / 2) - 1); i++) {
            if (arr[i] == arr[i + 3]) {
                score2 += 0.5
            } else {
                score2 -= 0.25
            }
        }
    }else {
        score2 = 0;
    }
    
    Finalscore = score1 + score2;
    console.log(arr);
    console.log("Score1 " + score1);
    console.log("Score2 " + score2);
    return Finalscore;
}
