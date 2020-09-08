// Your code here
function saturdayFun (event="roller-skate"){
  return `This Saturday, I want to ${event}!`
}

let mondayWork = function(event="go to the office") {
  return `This Monday, I will ${event}.`
}
mondayWork();

function wrapAdjective(emphatic="*") {
  return function(param="special") {
    return `You are ${emphatic}${param}${emphatic}!`
  }
}

const Calculator = {
  add: function(num1, num2){
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

function actionApplyer(startingInteger, array){
  let currentValue = startingInteger
  if (array.length === 0){
    return startingInteger
  } else {
    for(let fn of array){
      currentValue = fn(currentValue)
    }
    return currentValue
  }
}
