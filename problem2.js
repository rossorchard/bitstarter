#!/usr/bin/env node



var fibonacci = function(sequence, number){
	if(number<1){
		return sequence;
	}
	sequence=nextFib(sequence)
	return fibonacci(sequence, number-1);
}

var nextFib = function(seq){
	if(seq.length < 1){
		seq=[1];
	} else if(seq.length < 2){
		seq=[1,2];
	} else {
		seq.push(seq[seq.length-2] + seq[seq.length-1])
	}
	return seq;
}

console.log(nextFib([1]));
//console.log(fibonacci(5));
// should return 1,2,3,5,6




