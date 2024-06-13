/*
    if (조건식1) {
        조건식1이 true이면 실행
    } else if(조건식2) {
        조건식2가 true이면 실행
    } else {
        조건식1, 2가 모두 false이면 실행
    }
*/
// js파일 연결 됐는지 확인하는 법: alert("testing...")를 입력하기

// 나이에 따라서 입장료를 계산
let age = prompt("당신의 나이를 입력하세요", "1"); //나이
let charge = 0; //입장료

if (age < 8) {
    document.write("미취학 아동입니다.<br>");
    charge = 1000;
}else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>");
    charge = 2000;
}else if(age >= 14 && age < 20){
    document.write("중, 고학생입니다.<br>");
    charge = 2000;
}else{
    document.write("일반인입니다.<br>");
    charge = 2500;
}
document.write("입장료는 <span class='access'>" + charge + "원</span> 입니다.");
