
//Function Using Function Declaration
saturdayFun()
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

//Function Using a Function Expression
let mondayWork = function(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
  return function(adj = "special"){
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add: (num1, num2) => num1 + num2, 
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2
}


function actionApplyer(start, arr){
  let num = start
  if (arr.length !== 0){
    for(let fn of arr){
      num = fn(num)
    }
  }
  return num
}
