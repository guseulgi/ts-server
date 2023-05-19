// 모듈 불러오기
const express = require('express');
const cors = require('cors');

// express 객체 생성
const app = express();

// const corsOptions = {
//     origin: 'http://211.237.50.150:7080', // 농림축산수산~
// };
// app.use(cors(corsOptions));
app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );

app.use(express.static('public'));


// 기본 포트를 app 객체에 설정
//const port = 5001;

// 라우터
const foodRouter = require('./routes/food');

// 미들웨어 함수를 특정 경로에 등록
app.use('/', foodRouter);


app.use('/api/data', (req, res) => {
    // 테스팅
    res.json({ greeting: 'Hello World' });
});

// 서버 구동
// app.listen(port, () => {
//     console.log(`server running at http ${port}`);
// });
