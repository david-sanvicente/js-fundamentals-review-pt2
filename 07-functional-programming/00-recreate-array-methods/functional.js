/* eslint-disable no-unused-vars */
function forEach(arr){
    arr.forEach(item => {
        console.log(item)
    });
}

function doubler(num){return num*2};

function map(arr, callback){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

function filter(arr, func){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

function includes(array, target){

	for(let i in array){
		if(array[i] == target){
			return true
		}
	}
	return false
}

function countWords(num, str){
	let count = num;
	let words = str.split(' ').length;

	return count + words;
}

function reduce(array, num, func){
    let val = num;

    for(let i in array){
        let sum = func(val, array[i])
        val = sum;
    }
    return val;
}

function sum(array){
    return reduce(array, 0, (a, b) => a + b)
}

function every(array, func){
    for(let i in array){
        if(!func(array[i])){
            return false
        }
    }
    return true;
}

function some(array, func){
    for(let i in array){
        if(func(array[i])){return true}
    }
    return false
}