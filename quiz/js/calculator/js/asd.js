let sumNum = '';
let oper = '';
let prevNum = '';
let numbers = []; // numbers 배열 추가

let clearCalc = function(){
    sumNum = '';
    oper = '';
    prevNum = '';
    numbers = []; // numbers 배열 초기화
}

let number = function(num){
    sumNum += num;
    console.log("입력숫자: " + sumNum);
}

let sign = function(sin){
    if (sumNum !== '') { // 현재 입력한 숫자가 있으면
        numbers.push(Number(sumNum)); // numbers 배열에 추가
    }
    
    if (numbers.length === 2) { // numbers 배열에 숫자가 두 개 있으면 계산
        calculate(); // 계산 후 sumNum에 결과 저장
    }
    
    oper = sin;
    sumNum = ''; // 새로운 숫자를 입력받기 위해 sumNum 초기화
    console.log("입력문자: " + sin);
}

let calculate = function(){
    if (numbers.length < 2) { // numbers 배열에 숫자가 두 개 미만이면 계산 불가
        alert("Error: 두 개의 숫자가 필요합니다.");
        clearCalc();
        return;
    }

    let num1 = numbers.shift(); // numbers 배열에서 첫 번째 숫자를 꺼냄
    let num2 = Number(sumNum); // 현재 sumNum을 두 번째 숫자로 사용
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
    sumNum = result.toString(); // 결과를 sumNum에 저장하여 다음 계산에 사용
    oper = '';
    prevNum = '';
    numbers = [result]; // 결과를 numbers 배열에 저장하여 다음 계산에 사용
}
