// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const p = document.createElement("p");
p.textContent = "¡Hola, soy rojo!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "¡Soy un h3 azul!";
h3.style.color = "blue";
container.appendChild(h3);

const content2 = document.createElement("div");
content2.classList.add("content2");
content2.setAttribute("style", "border: 1px solid black; background: pink; padding: 10px;");
const h1 = document.createElement("h1");
h1.textContent = "Estoy en un div!"
content2.appendChild(h1);
const p2 = document.createElement("p");
p2.textContent = "¡YO TAMBIEN!";
content2.appendChild(p2);

container.appendChild(content2);