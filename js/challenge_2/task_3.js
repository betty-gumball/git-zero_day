#!usr/bin/node
let result=1;
function factorial(n) {
  for(let i=1; i<=n; i++) {
    result*=i;
  }
    return result;	 
        }
  console.log(factorial(10))
  module.exports = {factorial};

// function fact(n) {
//	 let result=1;
//	 return fact(n*(n-1));
// }
//console.log(fact(10))

