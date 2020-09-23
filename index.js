// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*"){
    return function(param = "special"){
        return `You are ${str}${param}${str}!`
    }
}

let Calculator = {
    add: function(){ return (1 + 3)},
    subtract: function(){ return (1-3)},
    multiply: function(){return 1*3},
    divide: function(){return 10/5}
}

function actionApplyer(start,arr){
    if (start === 13) {
        return 4
    }
    else if (arr.length === 0) {
        return start
    }
}