
//This function only check which is present or not
//return array i.e 101001
module.exports.wordCheck = async function ( inputs ) {

    var str = inputs;

    var strArr = str.split(' ');

    strRuleArr = ['am', 'is', 'are', 'i', 'he/she/it', 'we/you/they'];

    var matrixArr = [];
    var count = 0;

    // word splitter
    for (var i = 0; i < strRuleArr.length; i++) {
        var arr = strRuleArr[i].split('/');
        for (var k = 0; k < arr.length; k++) {
            count += 1;
            if (strArr.includes(arr[k])) {
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

    return matrixArr;
}
