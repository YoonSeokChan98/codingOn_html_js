let expression = '';

let clearCalc = function(){
    expression = '';
    console.log("Clear");
}

let appendNumber = function(num){
    expression += num;
    console.log("Expression: " + expression);
}

let appendSign = function(sign){
    expression += sign;
    console.log("Expression: " + expression);
}

let calculate = function(){
    try {
        let result = eval(expression);
        alert("결과는: " + result);
        expression = '';
    } catch (e) {
        alert("Error in calculation");
        expression = '';
    }
}
clearCalc();
