console.log("begin node.js");
//npm 이란?
/* 
터미널에 npm init
> package.json 파일 생성 - npm을 이용해 여러 모듈을 적용할 때 등 관리를 좀 더 쉽게 할 수 있는 파일. 없어도 가능
npm install figlet 피글렛 모듈 설치
> package-lock.json - 패키지보다 자세하게 정확한 정보가 기록되는 것
설치할 때 -g 를 붙이면 컴퓨터에 설치한다.(전역) 그러나 이러면 충돌이 일어날 수 있으니 주의
> node_modules - 다운받은 모듈이 있는 곳
*/
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
/* 
express란
웹 프레임워크를 만드는 모듈
웹 프레임워크? 백엔드로 요청을 보냈을 때 서버에서 응답으로 돌려주는 것
*/