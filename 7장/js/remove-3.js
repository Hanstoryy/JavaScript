const btns = document.querySelectorAll("p > span");

for(let btn of btns){
    btn.addEventListener("click", function(){
        this.parentNode.remove(this);
    });
}