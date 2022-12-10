#!/usr/bin/node
function Largest(nums) {
   //nums.Math.max()
   nums = [3,4,5];
   let largest = nums[0];
   let secondLarge = 0;
	for(let i=1; i<=nums.length; i++) {
	   if(nums[i] > largest) {
            largest = nums[i];
                  }}
            return largest;
               }  
//console.log(Largest())

function getSecondLargest(num) {
	//num = [4,2,7,9];
	num.sort();
	num.reverse();
	let second_largest_num = num[1];
	return second_largest_num;
}
console.log(getSecondLargest([3,7,4,9]))
module.exports = {getSecondLargest};

