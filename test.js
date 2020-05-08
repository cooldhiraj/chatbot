const _ = require('lodash');

var firstArr = _.first([1, 2, 3], function(num) {
    return num < 3;
  });
console.log(firstArr);