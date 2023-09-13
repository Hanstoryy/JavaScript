let num = parseInt(prompt("원하는 숫자 입력"));

if(num % 3 == 0){
    document.write(`${num}은 3의 배수입니다.`);
} else{
    document.write(`${num}은 3의 배수가 아닙니다.`);
}
