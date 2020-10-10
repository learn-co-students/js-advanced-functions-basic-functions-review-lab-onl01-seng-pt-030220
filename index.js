// Your code here

function saturdayFun(activity="roller-skate") {
//console.log(`This Saturday, I want to ${phrase}!`)
return `This Saturday, I want to ${activity}!`;
}


function mondayWork(event="go to the office") {
  return `This Monday, I will ${event}.`;
}

function wrapAdjective(flair="*") {
  return function(string="special") {
    return `You are ${flair}${string}${flair}!`
  }
}

const Calculator = {
    add: function(a,b) {
      return a+b
    },
    subtract: function(a,b) {
      return a-b
    },
    multiply: function(a,b) {
      return a*b
    },
    divide: function(a,b) {
      return a/b
    }
  }

  function actionApplyer(start, fns) {
      for (let i =0; i < fns.length; i++) {
          start = fns[i](start)
      }
      return start
  }
