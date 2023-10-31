// 콘테이너 영역과 이미지 요소 가져오지
const container = document.querySelector("#container");
const img = document.querySelector("img");

// 마우스가 콘테이너 위로 올라가거나 나가면 이미지 변경
container.addEventListener("mouseover", ()=>{
    img.src = "images/pic-6.jpg";
});
container.addEventListener("mouseout", ()=>{
    img.src = "images/pic-1.jpg";
});
