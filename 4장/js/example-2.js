sum = (a, b) => {return a*b};

let num1 = parseInt(prompt("첫 번째 숫자 입력"));
let num2 = parseInt(prompt("두 번째 숫자 입력"));

document.write(`<h2>입력한 두 수의 곱은 ${sum(num1,num2)}입니다.<h2>`);