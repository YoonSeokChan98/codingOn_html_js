// alert("test"); //js파일이 연결됐는지 확인하는 용도 

// date 객체 설정 - today
let today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

const day1 = today.getDay();
console.log(day1); // 요일 - 숫자로 표기됨 
                    // 예) 0=일, 1=월, 2=화, 3=수, 4=목, 5=금, 6=토
let day2 = ""; // 빈문자를 초기화 하면 문자 변수임
switch(day1){ 
    case 0:
        day2 = "일요일"; break;
    case 1:
        day2 = "월요일"; break;
    case 2:
        day2 = "화요일"; break;
    case 3:
        day2 = "수요일"; break;
    case 4:
        day2 = "목요일"; break;
    case 5:
        day2 = "금요일"; break;
    case 6:
        day2 = "토요일"; break;
}



// 시간 추출
let clock = function(){
    // now 객체를 새로 생성함 / clock(콜백함수를 사용하기 위함)
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    // 삼항 연산자 사용 
    // 숫자가 1자리 수 일 때 0을 붙여서 2자리수로 표기되게 만들어줌
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // displayDate 선언
    let displayDate = document.getElementById("today")
    // inerHTML 속성은 태그와 글자를 저장할 수 있음
    displayDate.innerHTML = 
    `${year}년 ${month}월 ${date}일 ${day2}`;

    // 오전, 오후로 표기하기
    // if(hours <= 12){
    //     document.getElementById(`PM ${hours}`);
    //     }else{
    //         document.getElementById(`AM ${hours}`);
    //     }
    // }

    // displayTime 선언
    let displayTime = document.getElementById("clock");
    displayTime.innerHTML = 
    `${hours}시 : ${minutes}분 : ${seconds}초`;
}

// clock - 콜백 함수
setInterval(clock, 1000);