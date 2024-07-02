// 하나의 모듈 파일에 하나의 모듈 만들기
const a = 10;
const b = 20;

function connect() {
    return a + b;
}

module.exports = connect;