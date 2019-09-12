'use strict'

const checkForSpam = function(str) {
    const strLowerCase = str.toLowerCase();
    return strLowerCase.includes('sale') || strLowerCase.includes('spam');
  };

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));