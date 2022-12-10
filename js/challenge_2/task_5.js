#!/usr/bin/node
function getLetter(s) {
        let text = s;
	let letter = text.charAt(0);
   //let slen = s.length;
	if(letter.match(/^[aeiou]/) && letter.toLowerCase()) {
		return "A";
 	           }
	else if(letter.match(/^[bcdfg]/) && letter.toLowerCase())
		return "B";
	else if(letter.match(/^[hjklm]/) && letter.toLowerCase())
		return "C";
	else if(letter.match(/^[npqrstvwxyz]/) && letter.toLowerCase())
		return "D";
	else
		return "no match";
           }
	console.log(getLetter("hnbb"))
        module.exports = {getLetter};

