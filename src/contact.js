const contactContent = (() => {
    const contactDiv = document.createElement("div")
    const contactHeader = document.createElement("h1")
    contactHeader.textContent = "CONTACT"
    contactDiv.appendChild(contactHeader)
    const _contactContent = document.createElement("p")
    _contactContent.textContent = "Call us on 07911000000, maybe Mr. Teeny will answer, maybe he won't - he sort of does what he wants."
    contactDiv.appendChild(_contactContent)

    return contactDiv
    })()
    
    export default contactContent