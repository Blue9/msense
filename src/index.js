let info = document.createElement("p");
info.innerHTML = "gucci gang";

const content = document.getElementById("content");
content ? content.appendChild(info) : false;
