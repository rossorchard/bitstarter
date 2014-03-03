#!/usr/bin/env node

var divides = function(factors, value){
	for(k in factors){
		if((value % factors[k]) == 0){
			return true;
		}
	}
	return false;
}

var sum = function(values){
	var total=0;
	for(k in values){
		total+=values[k];
	}
	return total;
}



var euler = function(factors, max){
	var retvals=[];
	for(var i=1; i < max; i++)
	{
		if(divides(factors,i)){
			retvals.push(i);
		}
	}
	return sum(retvals);
}

//console.log(sum([3,4,7]));
console.log(euler([3,5],1000));


