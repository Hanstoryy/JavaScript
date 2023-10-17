const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let insertNode = document.createElement("p");
    let textNode = document.createTextNode("Typescript");
    const basicNode = document.querySelectorAll("p")[2];
    insertNode.appendChild(textNode);
    document.body.insertBefore(insertNode,basicNode);
},{once:true});