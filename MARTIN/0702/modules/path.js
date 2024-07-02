const path = require('path')

// join(경로들): 여러개의 경로조작을 결함하여 하나의 경로로 생성
// 상대, 절대, 혼합 경로로 설정될 수 있음.

// 상대 경로 예시
const pathJoin1 = path.join(__dirname, 'public', 'txt', 'file.txt');
console.log(pathJoin1);

// 절대 경로 예시: 경로 조각 중 하나라도 절대 경로가 있으면 결과는 절대경로됨
const pathJoin2 = path.join('/public', 'txt', 'file.txt');
console.log(pathJoin2);

// 혼합 경로 예시: ..을 쓰면 상위 폴더로 이동
const pathJoin3 = path.join('/users', 'yoon', '../files', 'file.txt');
console.log(pathJoin3);




// resolve(경로들): 여러개의 경로 조각을 결함하여 절대경로로 생성함(경로가 없으면 현재경로)
const pathresolve1 = path.resolve("public", 'txt', 'file.txt');
console.log(pathresolve1);
const pathresolve2 = path.resolve();
console.log(pathresolve2);

// basename(경로, 확장자[선택]): 주어진 경로의 마지막 부분(파일 이름)을 반환
// 확장자가 없으면 전체 파일명, 확장자가 있으면 확장자를 제거한 파일명
const filename = path.basename("/users/yoon/files/file.txt");
console.log(filename);
const originalName = path.basename("/users/yoon/files/file.txt", '.txt');
console.log(originalName);

// extname(경로): 주어진 경로의 확장자를 반환
const ext = path.extname("/users/yoon/files/file.txt");
console.log(ext);

// dirname(경로): 주어진 경로의 디렌토리 부분을 반환
const dir = path.dirname("/users/yoon/files/file.txt");
console.log(dir);