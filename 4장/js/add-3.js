// 1~number까지 합계를 계산하는 함수
// 함수 선언.
function calcSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}
//사용자로 부터 정수입력
let number = parseInt(prompt("정수 입력(몇 까지 더할까요?)"));

//함수 호출.
document.write(`<h1>1부터 ${number}까지 합은 ${calcSum(number)}입니다. </h1>`);
