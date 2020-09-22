// Your code here

function saturdayFun(meow = "roller-skate"){
return `This Saturday, I want to ${meow}!`
}; 



function mondayWork(work = "go to the office"){
return `This Monday, I will ${work}.`
}

mondayWork()


function wrapAdjective(string = "*"){
    return function innerFunction(meow = "special"){
     return `You are ${string}${meow}${string}!`
    }
}; 

wrapAdjective()

const Calculator = {
    add: function(num1,num2){
        return num1 + num2
        }, 
    subtract: function(num1,num2){
        return num1 - num2
    }, 
    multiply: function(num1, num2){
        return num1 * num2
    }, 
    divide: function(num1, num2) {
        return num1 / num2
    }
}


function actionApplyer(startingInt, array){
let number = startingInt 
array.forEach(fxn => {
    number = fxn(number)
})
return number
}