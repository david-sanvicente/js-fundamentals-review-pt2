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