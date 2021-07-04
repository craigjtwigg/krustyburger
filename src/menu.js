import CloggerImage from './theClogger.jpeg'
import KBImage from './krustyBurger.jpeg'
import FootlongImage from './sideshow.jpeg'
import MNImage from './motherNature.jpeg'

const burgerFactory = (name, price, meal, theid, image) => {
    return {
        name: name,
        price: price,
        meal: meal,
        theid: theid,
        image: image
    }
}


const menuContent = (() => {
    const menuDiv = document.createElement("div")
    const menuHeader = document.createElement("h1")
    menuHeader.textContent = "MENU"
    menuDiv.appendChild(menuHeader)
    const _menuContent = document.createElement("div")
    _menuContent.classList.add("menuContent")

    let krustyBurger = burgerFactory("Krusty Burger", "$2", "$4", "krustyBurger", KBImage)
    let clogger = burgerFactory("The Clogger Burger", "$3", "$5", "theClogger", CloggerImage)
    let ribwich = burgerFactory("Ribwich", "$3", "$5", "ribwich") 
    let motherNature = burgerFactory("Mother Nature Burger", "$3", "$5", "motherNature", MNImage)
    let sideShow = burgerFactory("Side Show Bob Foot-Long", "£3", "$5", "sideshow", FootlongImage)

    
    const generateMenuItem = (item) => {
        const _itemCard = document.createElement("div")
        _itemCard.classList.add("itemCard")
        _itemCard.setAttribute("id", `${item.theid}`+"Card")
        const _itemName = document.createElement("h2")
        _itemName.classList.add(`${item.theid}`)
        _itemName.textContent = `${item.name}`
        _itemCard.appendChild(_itemName)
        const _itemImage = new Image();
        _itemImage.src = item.image;
        _itemImage.classList.add("itemImage")
        _itemCard.appendChild(_itemImage)
        const _itemPrice = document.createElement("div")
        _itemPrice.classList.add(`${item.theid}`+"Price")
        _itemPrice.textContent = "SANDWICH: " + `${item.price}` + " or MEAL: " + `${item.meal}`
        _itemCard.appendChild(_itemPrice)
        
        _menuContent.appendChild(_itemCard)

    }
    
    generateMenuItem(krustyBurger)
    generateMenuItem(clogger)
    //generateMenuItem(ribwich)
    generateMenuItem(motherNature)
    generateMenuItem(sideShow)
    
    menuDiv.appendChild(_menuContent)
    return menuDiv
})()

export default menuContent
