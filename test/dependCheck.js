
//This module check dependibility between words
// a = [1, 0, 1, 1, 0, 1, 1];
module.exports.depend = function ( inputs ) {
    var arr = inputs.slice(1, 7);
    var score = 0;

    for (var i = 0; i <= 2; i++) {
        if (arr[i] == arr[i + 3]) {
            score += 0.5
        } else {
            score -= 0.25
        }
    }

    return score;
}
