#!/usr/bin/node
function diagonalMatrix(mat) {
     let rightToLeftResult = 0;
     let leftToRightResult = 0;
	for (let i=0; i<mat.length; i++) {
	 for (let j=0; j<mat.length; j++) {
	     if (i==j){
	        rightToLeftResult+= mat[i][j];
	        }
	     if (i+j == mat.length -1){
                leftToRightResult+= mat[i][j];
	     }  
	 }
	}
result = rightToLeftResult-leftToRightResult;
return Math.abs(result);
}
console.log(diagonalMatrix([[1,2,3],[4,5,6],[7,8,9]]));
