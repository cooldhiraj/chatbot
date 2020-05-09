//Presentent Continuous
const fs = require('fs');
const _ = require('lodash');

// https://www.npmjs.com/package/bayes-classifier
var BayesClassifier = require('bayes-classifier')
var classifier = new BayesClassifier()

// Internal modules
const iCheck = require('./internal_modules/ing');
const wCheck = require('./internal_modules/wordCheck');
const wIndexing = require('./internal_modules/wordIndexing');
const dCheck = require('./internal_modules/depend');

var str = "I am trying so hard";
var PresentWordArray =[];
var IndexWordArray =[];
var score = 0;

//calling method ing
var valuesIng = iCheck.ingCheck(str);
PresentWordArray.push(valuesIng[0][0]);
IndexWordArray.push(valuesIng[1][0]);

//calling method of word check
var valuesCheck = wCheck.wordCheck(str);
PresentWordArray = PresentWordArray.concat(valuesCheck);

//calling method of word indexing
var valuesIndex = wIndexing.wordIndexing(str);
IndexWordArray = IndexWordArray.concat(valuesIndex);

//calling method of word depend score
score = dCheck.depend(valuesCheck);     //passing word check index array

console.log(PresentWordArray);
console.log(IndexWordArray);
console.log(score);