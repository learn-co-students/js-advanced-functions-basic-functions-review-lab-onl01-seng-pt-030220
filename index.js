// Your code here

function saturdayFun(thing="roller-skate"){
    let something = `This Saturday, I want to ${thing}!`
    return something
}

let mondayWork = function(activity="go to the office"){
    let someEvent = `This Monday, I will ${activity}.`
    return someEvent
}

function wrapAdjective(word="*"){
    return function inner(arg="special"){
        return `You are ${word}${arg}${word}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a+b
    }, 
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(start, arr){
    let a = start

    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
}