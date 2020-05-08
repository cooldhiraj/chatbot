a = [1, 1, 0, 0, 1, 0, 0];
b = [3, 1, -1, -1, 0, -1, -1];

var arr = a.slice(1, a.length);
var arr = [1, 0, 0, 1, 1, 1];
var score = 0;
for (var i= 0 ;i<=((arr.length-1)/2); i++) {
    if (arr[i] == arr[i+3]) {
        score += 0.5
    }else {
        score -= 0.25
    }
}

console.log(score);