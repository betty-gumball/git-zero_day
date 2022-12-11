#!/usr/bin/node
function simpleArraySum(s) {
    let sum = 0;

	for(let i=0; i < s.length; i++) {
		sum += s[i];
		//return sum;
	}
                return sum;
}
	console.log(simpleArraySum([1,2,3]));
