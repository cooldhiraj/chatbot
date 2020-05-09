
module.exports.ingCheck = async function ( inputs ) {
    const _ = require('lodash');
    //inputs => expecting string

    var strRuleArr= ['ing'];
    //spliting string to array
    var strArr = inputs.split(' ');

    // finding word ending with ing
    var ing = strArr.filter(strArr => strArr.endsWith(strRuleArr));

    // Will log value in array ing
    var ingIndex = []; //contains index of ing word i.e [2, 3, 3]
    for (let value of ing) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        //pushing ing elent occur
        ingIndex.push(strArr.findIndex(element => element == value));
    }

    //spice array till ing
    var strIngArr = strArr.splice(0, ingIndex[0] + 1);  //will consider only first ing element index


    var matrixArray = [];   //containg status whether ing is present of not in string
    var matrixIndexArray = [];  //containg index of ing

    //creating array matrix with rule 2
    if (!_.isEmpty(strIngArr)) {
        matrixArray.push(1);
        matrixIndexArray.push(ingIndex[0])
    } else {
        matrixArray.push(0);
        matrixIndexArray.push(-1)
    }
    
    return ([matrixArray, matrixIndexArray])
}