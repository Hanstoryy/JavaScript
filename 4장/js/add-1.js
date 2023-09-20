// 1~10까지 합계를 계산하는 함수
// 함수 선언.
function calcSum(){
    let sum = 0;
    for(let i = 1; i < 11; i++){
        sum += i;
    }
    document.write(`<h1>1부터 10까지 합은 ${sum}입니다. </h1>`);
}

calcSum();


//함수 호출.