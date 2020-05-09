async function PresentContinousTense() {

    // Internal modules
    const iCheck = require('./internal_modules/ing');
    const wCheck = require('./internal_modules/wordCheck');
    const wIndexing = require('./internal_modules/wordIndexing');
    const dCheck = require('./internal_modules/depend');

    var str = "i am try so hard";
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
    score = await dCheck.depend(PresentWordArray);     //passing word check index array

    console.log(PresentWordArray);
    console.log(IndexWordArray);
    console.log(score);

}

PresentContinousTense();
