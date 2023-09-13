//섭씨 온도= 화씨온도 -32 /.18
//프롬프트로 화씨 온도 입력 받는다.
//섭씨온도 계산하고, 출력한다
//출력은 alert() 또는 document.write() 중 선택
//화씨온도 00도는 섭씨 온도 00도 입니다.

function convert(temper) {
    return (temper-32)/1.8;
}

let a = parseFloat(prompt("화씨 온도를 입력해주세요"));

let b=convert(a).toFixed(1);
alert(`입력하신 화씨 온도는 ${a}도, 변환된 섭씨 온도는 ${b}도 입니다.`);
document.write(`입력하신 화씨 온도는 ${a}도, 변환된 섭씨 온도는 ${b}도 입니다.`);

