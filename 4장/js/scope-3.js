// var hi = "hello"; //전역변수

// function change(){
//     hi = "bye"; // 함수 안에서 전역변수 값 수정 가능
// }

// console.log(hi); // hello 출력
// change();
// console.log(hi); // bye 출력

var hi = "hello"; //전역변수

function change(){
    var hi = "bye"; 
}

console.log(hi); // hello 출력
change();
console.log(hi); // bye 출력