const controller = require('./controller/user');

controller.get('/', controller.main);
app.get('/post', controller.post);

// === 데이터 요청, 응답
app.post('/resultPost', controller.resultPost);