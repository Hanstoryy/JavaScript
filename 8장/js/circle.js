// 원의 반지름 입력 받기
const result = document.querySelector("#result");
let r = parseInt(prompt("반지름의 크기는?"));
function getAround(r){
    return (r*2)*Math.PI;
};

function getArea(r){
    return (r*r)*Math.PI;
    
};
result.innerText = `원의 반지름 : ${r}
                    원의 둘레 : ${getAround(r).toFixed(3)}
                    원의 넓이 : ${getArea(r).toFixed(3)}`;