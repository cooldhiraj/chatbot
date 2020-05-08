original = ['he'];

str = ['i', 'he/she/it', 'we/you/they'];
var matrixArr = [];
var count = 0;

// word splitter
for (var i = 0; i < str.length; i++) {
    var arr = str[i].split('/');
    for (var k = 0; k < arr.length; k++) {
        count+=1;
        if (original.includes(arr[k])) {
            matrixArr.push(1);
            count = 0;
            break;
        } else {
            if (count == arr.length) {
                count = 0;
                matrixArr.push(0);
            }
        }
    }
}

console.log(matrixArr);
