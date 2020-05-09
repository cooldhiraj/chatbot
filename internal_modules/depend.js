module.exports.depend = function (inputs) {
    var arr = inputs.slice(1, inputs.length);
    var score = 0;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(arr.reduce(reducer));

    //dependiblity check
    for (var i = 0; i < ((inputs.length) - 1) / 2; i++) {
        if (arr[i] == arr[i + 3]) {
            score += 0.5
        } else {
            score -= 0.25
        }
    }

    return score;
}
