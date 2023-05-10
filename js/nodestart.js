console.log("begin node.js");
//npm 이란?

//모듈을 변수에 넣어주는 것
// var figlet = require("figlet");

// figlet("O-ggs!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
//터미널에 npm uninstall figlet 입력해서 모듈 삭제

//express란
//서버 시작: node 파일경로
//서버 종료: ctrl+c
const express = require("express");
const app = express();
const port = 3000;

//cors란?
var cors = require('cors')
 //어디에서 요청하는지 조건을 설정해 줄 수 있음 비워두면 모든 곳의 요청을 받는 것.
app.use(cors())

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/dog", function (req, res) {
  res.send("와로아롸오라오라ㅗ아ㅘ오오라오랑뢍");
});

app.get("/user/:id", function (req, res) {
    //:변수명
    //:id 자리에 입력한 값이 req에 들어온다.
    const q = req.params
    console.log(q)
    //라우팅에 ?를 쓴 후에 키=값&키=값 ... 이런식으로 받을 수 있는 query
    const name = req.query
    console.log(name)
  res.send(`굴러가는중`);
});

app.get("/sound/:name", function (req, res) {
    //value값을 한 번에 넣을 때 많이 쓰는 요청방법
    const { name } = req.params
    if(name == "dog"){
        res.send("와로아롸오라오라ㅗ아ㅘ오오라오랑뢍")
    } else if(name == 'cat'){
        res.send('애애ㅣㅇ오오옹')
    } else if(name == 'egg'){
        res.send('또르르르륵')
    } else{
        res.send('unknown')
    }
    
  });  

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
//port란?
//http 메소드, 라우팅, 콜백함수란?

