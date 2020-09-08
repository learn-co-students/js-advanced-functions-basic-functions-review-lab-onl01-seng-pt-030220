// Your code here
function saturdayFun (activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
  }

  function mondayWork (activity="go to the office"){
    return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(symbol="*") {
    return function(adjective="special") {
      return `You are ${symbol}${adjective}${symbol}!`
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

  function actionApplyer(start, array){
    let value = start
    if (array.length === 0){
      return start
    } else {
      for(let key of array){
        value = key(value)
      }
      return value
    }
  }