const factor = 5;

function calc(){
    return num * factor;  //오류 발생 (num is not defined)
}
{
const num = 10; // 지역 변수이기 때문에 블록 밖에서 사용 불가
let result = calc(); // 함수 호출
document.write(`result : ${result}`);
}