// alert("testing");
function calc(){
    let v1 = document.getElementById("v1");
    let v2 = document.getElementById("v2");
    let op = document.getElementById("op");

    console.log(v1, v2 ,op);

    let v1Val = v1.value;
    let v2Val = v2.value;
    let opVal = op.value;
    console.log(v1Val, v2Val, opVal);
    // input태그의 value(값)들은 string(문자)이다.
    console.log(typeof(v1Val), typeof(v2Val), typeof(opVal));


    // 숫자(정수, 실수)로 형변화 / op 즉 부호(+, -, *, /)는 형 변환을 할 필요가 없음
    v1Val = Number(v1Val);
    v2Val = Number(v2Val);

    let result = 0; // 계산 결과값
    switch (opVal) {
        case '+':
            result = v1Val + v2Val; break;
        case '-':
            result = v1Val - v2Val; break;
        case '*':
            result = v1Val * v2Val; break;
        case '/':
            result = v1Val / v2Val; break;
    }
    console.log(result);

    // 계산 된 결과(result)를 결과(input)에 출력
    let res = document.getElementById("res");
    res.value = result;
}

// 취소하기(초기화) 함수 정의
function reset(){
    // 빈 문자열로 만들어 줌, 즉 처음 상태인 빈칸으로 초기화시키는 것
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("op").value = "";
    document.getElementById("res").value = "";
}