// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수
// 함수 선언.
function calcMulti(num1, num2){
    let multiply = num1 * num2;
    return multiply;
}
//사용자로 부터 정수입력
let num1 = parseInt(prompt("첫 번째 숫자 입력 : "));
let num2 = parseInt(prompt("두 번째 숫자 입력 : "));
//함수 호출.
document.write(`<h1>${num1}와 ${num2}를 곱한 값은 ${calcMulti(num1, num2)}입니다. </h1>`);