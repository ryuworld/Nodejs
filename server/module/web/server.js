const {BASE_DIR,PORT} = require("../../../Global");
const express = require("express");
const server = express();


// // mariaDB connect
// const maria = require("../db/maria");


//ajax 통신원활을 위한 미들웨어
const cors = require("cors");
server.use(express.json());
server.use(cors());

server.listen(PORT, () => {
  console.log(`${PORT} Port 서버 구동!!!`);
});

//정적파일들 사용
server.use(express.static(`${BASE_DIR}/client/build/index.html`));

server.get("/", (req, res) => {
  res.sendFile(`${BASE_DIR}/client/build/index.html`);
});

//api 사용
server.use("/board", require('../../service/board/router/BoardRouter'));

// 리액트 라우터 사용
server.get("*", (req, res) => {
  res.sendFile(`${BASE_DIR}/client/build/index.html`);
});
