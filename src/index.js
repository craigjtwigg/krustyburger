import './style.css'
import Logo from "./krustyburgerlogo.png"
import menuContent from './menu'
import contactContent from './contact'
import homeContent from './home'

function component() {
const container = document.createElement("div")
container.classList.add("container")
const header = document.createElement("div")
header.classList.add("header")

document.body.appendChild(container)

const kbLogo = new Image();
kbLogo.src = Logo;
kbLogo.classList.add("kbLogo")

const nav = document.createElement('div')
nav.classList.add("nav")
nav.innerHTML = "<button class='homeButton'>HOME</button><button class='menuButton'>MENU</button><button class='contactButton'>CONTACT</button>"

const content = document.createElement("div")
content.classList.add("content")

content.appendChild(homeContent)



container.appendChild(header)
header.appendChild(kbLogo);
container.appendChild(nav);
container.appendChild(content)

const menuButton = document.querySelector(".menuButton")
menuButton.addEventListener("click", () => {
    content.textContent = ""
    content.appendChild(menuContent)
})

const contactButton = document.querySelector(".contactButton")
contactButton.addEventListener("click", () => {
    content.textContent = ""
    content.appendChild(contactContent)
})

const homeButton = document.querySelector(".homeButton")
homeButton.addEventListener("click", () => {
    content.textContent = ""
    content.appendChild(homeContent)
})

return container;
}



document.body.appendChild(component());

