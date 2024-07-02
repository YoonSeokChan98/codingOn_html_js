const fs = require('fs');

// 비동기 방식 - fs.writeFile / 동기 방식 - fs.fstatSync

// 파일 쓰기
// fs.writeFile("file.txt", "Hello World", (err) => {
//     if (err) throw err;
//     console.log('저장 완료');
// });

// 파일읽기
fs.readFile("file.txt", "utf8", (err, data)=>{
    if (err) throw err;
    console.log(data);
});
