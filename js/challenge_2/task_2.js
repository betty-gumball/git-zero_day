#!/usr/bin/node
const FuncOne = () => {
	return "This times";
}
const FuncTwo = (call,n) => {
     for (let i=0; i<n; i++) {
	console.log(FuncOne())
}}
FuncTwo(FuncOne,3)
module.exports = {FuncOne};

