import Seal from './seal.png'
import Joint from './joint.jpg'

const homeContent = (() => {
    const homeDiv = document.createElement("div")
    homeDiv.classList.add("homeDiv")

    const hey = document.createElement("h1")
    hey.textContent = "HEY! HEY! HEY!"
    homeDiv.appendChild(hey)

    const welcomeDiv = document.createElement("div")
    welcomeDiv.classList.add("welcomeDiv")
    homeDiv.appendChild(welcomeDiv)


    const joint = new Image();
    joint.src = Joint;
    joint.classList.add("joint");
    welcomeDiv.appendChild(joint)

    const welcome = document.createElement("p")
    welcome.classList.add("welcome")
    welcome.textContent = "Hey kids! Do you like burgers, fries, soda, BEER!? Come on down and fill your gut at our joint in donwtown Springfield USA!"
    welcomeDiv.appendChild(welcome)


    

    
    const guaranteeDiv = document.createElement("div")
    homeDiv.classList.add("guaranteeDiv")
    homeDiv.appendChild(guaranteeDiv)

    const seal = new Image();
    seal.src = Seal;
    seal.classList.add("seal");
    guaranteeDiv.appendChild(seal)

    const guarantee = document.createElement("p")
    guarantee.classList = "guarantee"
    guarantee.textContent = "We have sold LITERALLY dozens of burgers here at Krusty Burger - what else do you need to know!?"
    guaranteeDiv.appendChild(guarantee)

    return homeDiv
})()

export default homeContent