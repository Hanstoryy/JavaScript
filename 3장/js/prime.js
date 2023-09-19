let num = parseInt(prompt("원하는 숫자 입력 : "));
let priNum=0; //입력받은 숫자가 소수인지 아닌지 판별하는 값
for(let i = 2;i<=num/2;i++){ //n은 n/2이하 값만 약수로 가지므로 num/2로 숫자를 줄이면 
    if(num%i===0){           //반복횟수가 줄어든다.       
        priNum = 1;          // i로 계속 나누다가 나머지가 0이 되는 순간 priNum을 1로 체크
        break;               // 나누어 떨어지는 순간 소수가 아니기 때문에 break
    }
}
if(priNum===0 && num != 1){
    document.write(`${num}은 소수입니다.`);
} else if(priNum === 1) {
    document.write(`${num}은 소수가 아닙니다.`);
}else{
    document.write("1은 소수도 합성수도 아닙니다.")
}