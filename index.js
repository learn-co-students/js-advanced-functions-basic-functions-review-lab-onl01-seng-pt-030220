// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(whatever = '*') {
    let innerFunction = function(adj = 'special'){
        return `You are ${whatever}${adj}${whatever}!`;
    };
    return innerFunction;
}
wrapAdjective("%")();

let Calculator = {
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },
    multiply: (x,y) => {
        return x*y;
    },
    divide: (x, y) => {
        return x/y;
    }
};

function actionApplyer (int, arr) {
    for (let i = 0; i < arr.length; i++ ){
        int = arr[i](int)
      }
      return int
};