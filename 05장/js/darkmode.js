// 버튼을 클릭하면 다크모드를 키고 끌 수 있게 작성.
const btn = document.querySelector("button");

btn.onclick = () => {
    document.body.classList.toggle("dark");
}
