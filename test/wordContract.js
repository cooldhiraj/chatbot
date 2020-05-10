var contractions = require('contractions');
 
console.log(contractions.expand("I don't know who ya'll are."));
// Outputs: I do not know who you all are.
 
console.log(contractions.contract("You all will have not seen this."));
// Outputs: Y'all'll'ven't seen this.