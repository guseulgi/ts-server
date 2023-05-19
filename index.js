// 모듈 불러오기
const express = require('express');
const cors = require('cors');

// express 객체 생성
const app = express();

const corsOptions = {
    origin: 'http://211.237.50.150:7080', // 농림축산수산~
};

app.use(cors(corsOptions));

// 기본 포트를 app 객체에 설정
const port = 5001;
app.listen(port);

// 미들웨어 함수를 특정 경로에 등록
app.use('/', (req, res) => {
    res.redirect('https://todaydishes.netlify.app');
})
app.use('/api/data', (req, res) => {
    res.json({ greeting: 'Hello World' });
});

console.log(`server running at http ${port}`);