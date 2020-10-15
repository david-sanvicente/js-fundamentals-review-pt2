/* eslint-disable no-unused-vars */
function indexAndValue(array){
    return array.map((x, i) => {return {index: i, value: x}})
}

function capitalize(str){
    return str.toUpperCase()
}

function swapCase(str){
    return str
        .split(' ')
        .map((x, i) => {
            if(i % 2 == 0){return capitalize(x)}
            return x
        })
        .join(' ')
}

function extensionSearch(ext, array){
    return array.filter(str => {
        return str.includes(ext)
    })
}

function getPopulation(arr, tarr){
	// let sum = 0;

	// for(let c in arr){
	// 	let country = arr[c]
	// 	if(tarr.includes(country.name) || tarr.length == 0){
	// 		sum += country.population
	// 	}

    // }
    // return sum;
    
    return arr.reduce((acc, val) => {
        if(tarr.includes(val.name) || tarr.length == 0){
            return acc + val.population;
        }
        return acc;
    },0)
}

function keyifyArrayOfObjects(alias, superheroes){
    let heroes = superheroes.reduce((acc, hero)=>{
        acc[hero[alias]] = hero;
        return acc
    },{})
    return heroes
}

function powerLevelAverage(heroes){
    return Math.round(heroes.reduce((acc, hero) => {
        return acc + hero.powerLevel
    },0) / heroes.length
    )
}

function mapReduce(array, func){
    return array.reduce((acc, val)=>{
        acc.push(func(val))
        return acc;
    },[])
}

function filterReduce(array, func){
    return array.reduce((acc, val)=>{
        if(func(val)){
            acc.push(val)
        }
        return acc;
    },[])
}

function inYourBudget(budget, items){
    // return items.reduce((acc, item)=>{
    //     if(budget >= item.price){acc.push(item.item)}
    //     return acc
    // },[])
    return items
        .filter(item => {
            return item.price < budget
        })
        .map(item => item.item)
}

function separateAndReturnNames(heroes, nomen, maxLen){
    return heroes
        .map(hero => {
            let names = hero.name.split(' ')
            hero.firstName = names[0]
            hero.lastName = names[1]
            return hero
        })
        .filter(hero => hero[nomen].length <= maxLen)
        .map(hero => hero[nomen])
}

function priorityTodoDuration(array){
    return array
        .filter(item => item.priority === 'high')
        .reduce((acc, item)=>{
            return acc + item.duration
        },0)
}