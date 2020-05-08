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
countPart1(icount1);
countPart1(icount2);

console.log("score "+score);

//calculating score based on part1 
function countPart1 ( inputs ) {
    switch(inputs) {
        case 1:
            score += 1
            break;
        case 2:
            score += 0.5
            break;
        case 2:
            score += 0.25
            break;
        default:
            score = 0
    }
}


//calculating score based on part1 
function countPart2 ( inputs ) {
    switch(inputs) {
        case 1:
            score += 1
            break;
        case 2:
            score += 0.5
            break;
        case 2:
            score += 0.25
            break;
        default:
            score = 0
    }
}
