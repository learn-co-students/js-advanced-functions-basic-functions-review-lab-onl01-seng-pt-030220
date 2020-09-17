// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(s='special'){
        let wrapped = `${flair}${s}${flair}`
        return `You are ${wrapped}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

function actionApplyer(start, arr){
    let a = start

    for (const element of arr){
        a = element(a)
    }

    return a
}