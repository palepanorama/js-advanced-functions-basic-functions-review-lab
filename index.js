// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const sentence = wrapAdjective('!!!')('great')

const Calculator = {
    use: 'arithmetic',
    add: function(num1, num2) {
        return num1 + num2 
    },
    subtract: function(num1, num2) {
        return num1 - num2
    }, 
    multiply: function(num1, num2) {
        return num1 * num2 
    },
    divide: function(num1, num2) {
        return num1 / num2 
    }
}

function actionApplyer(num, array) {
    if (array.length === 0) {
        return num
    } else {
        for(let i = 0; i < array.length; i++) { 
            num = array[i](num) 
        }
    }
    return num
}