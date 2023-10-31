window.onload = function(){
    const bgCount = 5;
    let randNum = Math.floor(Math.random()*bgCount+1);
    console.log(randNum);
    document.body.style.backgroundImage = `url(images/bg-${randNum}.jpg)`;
}