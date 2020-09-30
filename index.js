
function saturdayFun(action='roller-skate'){
  return `This Saturday, I want to ${action}!`
};

let mondayWork = function(action='go to the office'){
  return `This Monday, I will ${action}.`
};

// function wrapAdjective(flair='*'){
//   let func = function(param='special'){
//     return `You are ${flair + param + flair}!`
//   }
//   return func
// }
function wrapAdjective(flair='*'){
  return function(param='special'){
    return `You are ${flair + param + flair}!`
  }
};


let Calculator = {
  add: (a, b)=>{ return a + b},
  subtract: function(a, b){ return a - b},
  multiply: (a, b) => { return a * b},
  divide: function(a, b){ return a / b}
};


function actionApplyer(startingInt, arrayOfFuncs){
  let integerSum = startingInt

  if (arrayOfFuncs.length === 0){
    return integerSum
  } else {
    arrayOfFuncs.forEach(function(funkshon){
      integerSum = funkshon(integerSum)
    })
    return integerSum
  }
};
