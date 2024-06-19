let sumNum = '';
let oper = '';
let prevNum = '';
let numbers = [];

let clearCalc = function(){
    sumNum = '';
    oper = '';
    prevNum = '';
    numbers = [];
}

sumNum = " ";
let number = function(num){
    sumNum += num;
    console.log("입력숫자: " + sumNum);
}

let sign = function(sin){
    oper = sin;
    prevNum = sumNum;
    numbers.push(Number(prevNum)); // prevNum을 numbers 배열에 추가
    sumNum = '';
    console.log("입력문자: " + sin);
}

let calculate = function(){
    numbers.push(Number(sumNum)); // 현재 sumNum을 numbers 배열에 추가
    if (numbers.length < 2) {
        alert("Error: 두 개의 숫자가 필요합니다.");
        clearCalc();
        return;
    }
    let num1 = numbers[0];
    let num2 = numbers[1];
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