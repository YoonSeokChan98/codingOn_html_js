// 하나의 모듈 파일에 여러개의 모듈 만들기

// 방법 1
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
/*
// 화살표 함수 사용법 / 화살표 함수는 한줄로 쓸 때 (return) 생략 가능
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
*/

// function 키워드를 사용 할때는 module.exports의 위치가 상관 없지만
// 화살표 함수로 작성했을 때는 module.exports가 항상 화살표 함수 아래에 위치해야 한다
// function일 때는 맨 위로 가도 됨
// 화살표 함수일 때는 무조건 아래에 있어야 함
// 잘 모르겠으면 걍 맨 아래에 박자
module.exports = {add, subtract, multiply};

// 방법 2
/*
module.exports.add = function(x, y) {
    return x + y;
};
module.exports.subtract = function(x, y) {
    return x - y;
};
module.exports.multiply = function(x, y) {
    return x * y;
};
*/

// 방법 2의 생략 버전
/*
exports.add = function(x, y) {
    return x + y;
};
exports.subtract = (x, y) => {
    return x - y;
};
exports.multiply = function(x, y) {
    return x * y;
};
*/