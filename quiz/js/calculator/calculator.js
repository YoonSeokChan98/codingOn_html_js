let sumNum = '';
let oper = '';
let prevNum = '';

let clearCalc = function(){
    sumNum = '';
    oper = '';
    prevNum = '';
}

sumNum = " ";
let number = function(num){
    sumNum += num;
    console.log("입력숫자: " + sumNum);
}

let sign = function(sin){
    oper = sin;
    prevNum = sumNum;
    sumNum = '';
    console.log("입력문자: " + sin);
}

let calculate = function(){
    let num1 = Number(prevNum);
    let num2 = Number(sumNum);
    let result;
    switch(oper){
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        default:
            result = "Error";
    }
    alert("결과는: " + result);
    clearCalc(); // 계산 후 초기화
}