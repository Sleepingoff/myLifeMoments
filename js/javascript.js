// 산술연산자
5 * 4;
//문자열 연결 연산자
'My name is' + 'Lee';
//할당 연산자
color = 'red';
//비교 연산자
3 > 5; // false
//논리 연산자
true && false;
//타입 연산자
typeof 'hi'; // string


//단항 산술 연산자
var x = '1'; //string
//string -> number
console.log(+x); // 1
//값을 바꾸진 못한다. **
console.log(x); // "1"

x = true; //boolean
//boolean -> number
console.log(+x); // 1
console.log(x); //true

x = false;
//boolean -> number
console.log(+x); // 0
console.log(x); //false

x = 'Hello';
//문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
console.log(+x); //NaN
console.log(x); // "Hello"

//암묵적 타입 변환 = 타입 강제 변환

//할당 연산자
var y;

y = 10;
console.log(y);

y += 5; // y = y + 5;
console.log(y);

y -= 5;
console.log(y);

y *= 5;
console.log(y);

y /= 5;
console.log(y);

y %= 5;
console.log(y);

var stry = 'My name is';

stry += 'Lee';
console.log(stry);


//동등 / 일치 비교 연산자
5 == '5' // true

'0' == ''; //false
0 == ''; //true
0 == '0'; //true
false == 'false'; //false
false =='0'; //true
false == null; //false
false == undefined; // false

NaN === NaN // false
//자신과 일치하지 않는 유일한 값
Number.isNaN()//NaN인지 조사하기 위한 빌트인 함수
Number.isNaN(NaN)//true
Number.isNaN(1 + undefined); //true

//ES6에서 추가된 메서드. 일치비교 수행
Object.is(NaN, NaN); // true
Object.is(-0, +0); //false


//삼항 조건 연산자
var result = score >= 60 ? 'pass' : 'fail';

result = 61;
console.log(result);

result = 50;
console.log(result);


//논리 연산자
true || true; // true
true || false // true
false && true // false
false && false // false
!true; //false
!false; //true