//각 요소를 가져옴
const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");
// 버튼을 눌렀을 때 모달 박스가 보이도록 active 스타일을 추가
open.addEventListener("click", () => {
    modalBox.classList.add("active");
})
// X버튼을 눌렀을 때 모달 박스가 사라지도록 active 스타일 제거
close.addEventListener("click", () => {
    modalBox.classList.remove("active");
})


