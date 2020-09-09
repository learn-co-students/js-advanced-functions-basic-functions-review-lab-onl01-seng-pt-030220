// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") { return `You are ${flair}${adjective}${flair}!`}
}

const Calculator = {
    add: function add() { return 1 + 3},
    subtract: function subtract() { return 1 - 3 },
    multiply:function multiply() { return 1 * 3 },
    divide: function divide() { return 10 / 5 }
}

function actionApplyer(start, array) {
    if (array.length > 0) {
         array.forEach(func => {
            start = func(start)
            return start
        })
    } 
    return start
}