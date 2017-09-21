const express = require('express');
const app = express();
const route = require('./route');

app.use(function (req, res, next) {
    console.log('RootTime:', Date.now());
    next();
});

app.use('/', route);

// 404 처리 부분
app.use((req, res, next) => {
    res.status(404).send('Not found page');
    next();
});

// 에러 처리 부분
app.use((err, req, res, next) => {
    console.error(err.stack); // 에러 메시지 표시
    res.status(500).send('Server Error!!'); // 500 상태 표시 후 에러 메시지 전송
    next();
});

app.listen(3000, function () {
    console.log("Port on 3000!");
});