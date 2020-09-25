// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function innerWrap(param = 'special' ){
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
    return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    },
    multiply: function(num1, num2){
        return num1 * num2
    },
    divide: function(num1, num2){
        return num1 / num2
    }

}

function actionApplyer(startNum, array){
    let currentNum = startNum
        array.forEach(fn => {
        currentNum = fn(currentNum)
    })
    return currentNum
}