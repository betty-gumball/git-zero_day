#!/usr/bin/node
function virthdayCakeCandle(s){
	let candleH; 
	candleH = s[0];
	let result;
	for(let i=1; i<=s.length; i++){
		if(s[i] > candleH){
	        // result = s[i]; 
		candleH = s[i];
		}
	}
	return candleH;
}
console.log(virthdayCakeCandle([2,3,4,4,5]));
