/* eslint-disable no-unused-vars */
function concatString(){
    let args = Array.from(arguments)
    return args.join('');
}

function yourFunctionRunner(){
    let result = '';

    let args = Array.from(arguments)
    for(let i = 0; i < args.length; i++){
        result += args[i]();
    }

    return result;
}

function makeAdder(num){
    return (num2)=>{return num + num2}
}

function once(func){
    let flag = false;

    return ()=>{
        if(!flag){
            flag = true;
            return func();
            
        }
        else {
            return 'the function has already been called...';
        }
    };
}

function createObjectWithClosures(){
    let value = 0;
    return {
        oneIncrementer: ()=>{value += 1},
        tensIncrementer: ()=>{value += 10},
        getValue: ()=>{return value},
        setValue: (num)=>{value = num;}
    }
}

function dontSpillTheBeans(string){
    return {
        getSecret(){return string},
        setSecret(str){string = str;}
    };
}