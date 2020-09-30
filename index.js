
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
  add: ()=>{ return 1 + 3},
  subtract: function(){ return 1 - 3 },
  multiply: () => { return 1 * 3},
  divide: function(){ return 10 / 5 }
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
