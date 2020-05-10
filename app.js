async function PresentContinousTense(inputs) {

    // Internal modules
    const iCheck = require('./internal_modules/ing');
    const wCheck = require('./internal_modules/wordCheck');
    const wIndexing = require('./internal_modules/wordIndexing');
    const sCheck = require('./internal_modules/score');

    var str = inputs.toLowerCase();
    var PresentWordArray = [];
    var IndexWordArray = [];
    var score = 0;

    //calling method ing
    var valuesIng = await iCheck.ingCheck(str);
    PresentWordArray.push(valuesIng[0][0]);
    IndexWordArray.push(valuesIng[1][0]);

    //calling method of word check
    var valuesCheck = await wCheck.wordCheck(str);
    PresentWordArray = PresentWordArray.concat(valuesCheck);

    //calling method of word indexing
    var valuesIndex = await wIndexing.wordIndexing(str);
    IndexWordArray = IndexWordArray.concat(valuesIndex);

    //calling method of word depend score
    score = await sCheck.score(PresentWordArray);     //passing word check index array

    // console.log(PresentWordArray);
    // console.log(IndexWordArray);
    // console.log("Final score "+(score*1.66).toFixed(2)+"/10");
    return score*1.666667;

}


async function callUpper() {
    
    //https://www.learngrammar.net/a/examples-of-present-continuous-tense
    var strArr = [
        'The poet is writing romantic poems'
    ];

    var scoreAverage = []
    for (let value of strArr) {
        s = await PresentContinousTense( value );
        scoreAverage.push(s);
    }

    const _ = require('lodash');
    var finalAverage = _.mean(scoreAverage);
    console.log('confidence '+finalAverage.toFixed(2));
}

callUpper();




