const myURL = new URL("http://localhost.com:8000/users?query=001#hash");

// 속성
console.log(myURL.href);
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams.get('query'));
myURL.searchParams.append('newParam', 'kdt');
console.log(myURL.search);

// 매서드
console.log(myURL.toString());
const query = myURL.search
console.log(query);
const param = new URLSearchParams(query);
console.log(param.get('newParam'));
param.set("hello", 'world')
console.log(param.toString());
param.delete('newParam')
console.log(param.toString());