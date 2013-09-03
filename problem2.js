#!/usr/bin/env node

var addToFibon = function(sequence, numberToAdd){
	// base case
	if(numberToAdd==0){
		return sequence;
	} else {
		var lastnum=sequence.length-1;
		var next=(sequence[lastnum] + sequence[lastnum-1]);
		sequence.push(next);
		return addToFibon(sequence, (numberToAdd-1));	
	}
}


var fibonacci = function(sequence, number){
	if(number<1){
		return sequence;
	}
	sequence=nextFib(sequence)
	return fibonacci(sequence, number-1);
}

var nextFib = function(seq){
	if(seq == 1){
		return seq=[1];
	} else if(seq == 2){
		return seq=[1,2];
	} else if(seq > 2){ 
		return addToFibon([1,2], seq-2);
	} else {
	//	throw new Error("Not valid input");
		console.log("error: ");
	}

}

//console.log(addToFibon([1,2],3));
console.log(nextFib(40));
// should return 1,2,3,5,6




