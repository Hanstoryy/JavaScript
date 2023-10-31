// 버튼 가져오기
const backBtn = document.querySelector("#back");
const forwardBtn = document.querySelector("#forward");

backBtn.addEventListener("click", ()=>{
    history.go(-1);
});
forwardBtn.addEventListener("click", ()=>{
    history.go(1);
});