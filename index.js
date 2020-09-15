// Your code here
function saturdayFun(string = 'roller-skate') {

    return `This Saturday, I want to ${string}!`

}


function mondayWork(str = 'go to the office') {
    return `This Monday, I will ${str}.`

}

function wrapAdjective(outterStr = "*") {

    return function result(innerStr = "special") {

        return `You are ${outterStr}${innerStr}${outterStr}!`
    }

}

let Calculator = {

    add: function() {
        return 1 + 3

    },

    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },

    divide: function() {

        return 10 / 5
    }
}


function actionApplyer(base, arrayOfFun) {
    let result = base
    arrayOfFun.forEach(func => {

        return result = func(result)

    })

    return result

}
//(1000+(13*2) )%7
//function(a){ return a * 2 },
//function(a){ return a + 1000},
//function(a){ return a % 7 }