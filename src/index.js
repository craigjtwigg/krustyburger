import './style.css'
import Logo from "./krustyburgerlogo.png"

function component() {
const content = document.createElement("div")
content.classList.add("content")
const header = document.createElement("div")
header.classList.add("header")

document.body.appendChild(content)

const kbLogo = new Image();
kbLogo.src = Logo;
kbLogo.classList.add("kbLogo")

const nav = document.createElement('div')
nav.classList.add("nav")
nav.innerHTML = "<button class='navButtons'>HOME</button><button class='navButtons'>MENU</button><button class='navButtons'>CONTACT</button>"

content.appendChild(header)
header.appendChild(kbLogo);
content.appendChild(nav)

return content;
}

document.body.appendChild(component());

