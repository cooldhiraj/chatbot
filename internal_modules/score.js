module.exports.score = async function (inputs) {
    var newInputs = inputs.slice(1, inputs.length);
    var arr = newInputs;
    var score1 = 0; //count score i.e out of 2
    var score2 = 0; //dependibility score i.e out of 1.5
    var score3 = 0; //ing score i.e out of 2.5
    var Finalscore = 0;

    //adding array elements
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    var start = 0;
    var end = 3
    countArr = [];

    //counting how many times parts of words occurred
    for (var j = 1; j <= 2; j++) {
        var sArr = arr.slice(start, end);
        var count = sArr.reduce(reducer);
        countArr.push(count);
        if (!countArr.length == 0) {
            switch (countArr[countArr.length - 1]) {
                case 0:
                    score1 += 0;
                    break;
                case 1:
                    score1 += 0.75;
                    break;
                case 2:
                    score1 += 0.375;
                    break;
                case 3:
                    score1 += 0.188;
                    break;
                default:
                    score1 = 0;
            }
        }

        start = end;
        end += 3;
    }


    //dependiblity check
    if (!inputs[0] == 0) {  //ing should be present in present matrix array //needs to improve dependibity algo
        score3 = 3;
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
    
    Finalscore = score1 + score2 + score3;
    return Finalscore;
}
