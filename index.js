// Your code here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

function mondayWork(task="go to the office") {
    return(`This Monday, I will ${task}.`);
}

function wrapAdjective(flair="*"){
    return function(input="special"){
        let praise = `You are ${flair}${input}${flair}!`
        return (`${praise}`)
    }
}

const Calculator = {
    add(a, b){
        return(a + b);
    },
    subtract(a, b){
        return(a - b);
    },
    multiply(a,b){
        return(a * b);
    },
    divide(a, b){
        return(a / b);
    }
}

function actionApplyer(start, task=[]) {
    let a = start
    for (let i = 0; i < task.length; i++){
        a = task[i](a)
    }
    return a
}