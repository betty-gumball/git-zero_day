#!/usr/bin/node
function compareTriplets(a,b) {
    let point = [0,0];
	for (let i=0; i<=a.length && i<=b.length; i++) {
	 if(a[i] > b[i]) {
          point[0] = point[0]+1;
	 }	//return point;
	 if(a[i] < b[i]) {
          point[1] = point[1]+1;
	 } //return point;
	 if(a[i] == b[i]){ 
	  point[0]= point[0];
	  point[1]= point[1];
	 }

return point;
}}
console.log(compareTriplets([1,2],[3,2]))
