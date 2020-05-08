//Presentent Continuous
const fs = require('fs');
const _ = require('lodash');

// https://www.npmjs.com/package/bayes-classifier
var BayesClassifier = require('bayes-classifier')
var classifier = new BayesClassifier()

var str = "am i doing my best";
var strData0 = ['ing'];
var strData1 = ['am', 'is', 'are'];
var strData2 = ['i', 'he/she/it', 'we/you/they'];

//spliting string to array
var filter1 = str.split(' ');

// finding word ending with ing
var ing = filter1.filter(filter1 => filter1.endsWith(strData0));

// Will log value in array ing
var ingIndex = [];
for (let value of ing) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    //pushing ing elent occur
    ingIndex.push(filter1.findIndex(element => element == value));
}

//spice array till ing
var filter2 = filter1.splice(0, ingIndex[0]+1);


var matrixArray =[];
var matrixIndexArray =[];
//creating array matrix with rule 2
if (!_.isEmpty(filter2)) {
    matrixArray.push(1);
    matrixIndexArray.push(ingIndex[0])
}else {
    matrixArray.push(0);
    matrixIndexArray.push(-1)
}
//creating array matrix with rule 2
for (var i = 0; i < strData1.length; i++) {
    if (filter2.includes(strData1[i])) {
        matrixArray.push(1)
        matrixIndexArray.push(filter2.lastIndexOf(strData1[i]));
    }else {
        matrixArray.push(0);
        matrixIndexArray.push(-1);
    }
}

//creating array matrix with rule 3
//Level 2 indexing 
var count = 0;
for (var i = 0; i < strData2.length; i++) {
    var arr = strData2[i].split('/');
    for (var k = 0; k < arr.length; k++) {
        count+=1;
        if (filter2.includes(arr[k])) {
            matrixArray.push(1);
            matrixIndexArray.push(filter2.lastIndexOf(arr[k]));
            count = 0;
            break;
        } else {
            if (count == arr.length) {
                count = 0;
                matrixArray.push(0);
                matrixIndexArray.push(-1);
            }
        }
    }
}

console.log("Present "+matrixArray);
console.log("Index "+matrixIndexArray);




