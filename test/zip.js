a = [1, 1, 0, 0, 1, 0, 0];
b = [3, 1, -1, -1, 0, -1, -1];

var count = 0;
var score = 0;
var diff = [];

//Internal count variable
var icount1 = 0;
var icount2 = 0;

for (var i = 0; i < 7; i++) {
    var exist = a[i];
    var ind = b[i];
    if (exist) {
        if (i == 0) {
            count += 1;
            diff.push("Index "+b[i]);
            diff.push(count + "c");
            if (count == 1) {
                score += 0.5;
            }
        }
        if (!i == 0 && i <= 3 && i >= 1) {
            count += 1;
            icount1 += 1;
            if (b[i] < b[0]) {
                //dirrence between first index element and present element
                diff.push("diff "+(b[0] - b[i]));
                diff.push(count + "c")
            }
        }

        if (!i == 0 && i <= 6 && i >= 4) {
            count += 1;
            icount2 += 1;
            if (b[i] < b[0]) {
                diff.push("diff "+(b[0] - b[i]));
                diff.push(count + "c")
            }
        }
    }
}

console.log(diff);
console.log("score "+score);
console.log(icount1);
console.log(icount2);