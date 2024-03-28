// console.log("exo-7");

// console.log(jsonDatas);

let main = document.querySelector(".main_content")
let input = document.querySelector("input[type=text]")
let submitBtn = document.querySelector("button[type=submit]")
let cBox = document.querySelector("input[type=checkbox]")
let opt = document.querySelector("select")
let sortBtn = document.querySelector("button#sort")

let trad = {
    "car": "Voiture",
    "house": "Maison",
    "game": "Jeu",
    "videoGame": "Jeux Vidéos",
    "show": "Spectacle"
}

let addItem = () => {
    jsonDatas.forEach(data => {
        content = document.createElement("div")
        content.className = "item"

        Object.keys(trad).forEach(keyTrad => {
            if (keyTrad === data.type) {
                data.trad = trad[keyTrad]
            }
        })

        for (i = 0; i < Object.keys(data).length; i++) {
            p = document.createElement("p")
            p.className = Object.keys(data)[i]
            p.innerText = Object.values(data)[i]
            content.appendChild(p)
        }

        main.appendChild(content)
    })
}

let sortBy = (desc = false) => {
    div = document.querySelectorAll("div.item")

    if (opt.value !== "") {
        jsonDatas.sort((a, b) => {
            if (opt.value === "name") {
                if (a.name < b.name) {
                    return desc ? -1 : 1
                } else {
                    return desc ? 1 : 1
                }
            }

            if (opt.value === "price") {
                if (a.price < b.price) {
                    return desc ? -1 : 1
                } else {
                    return desc ? 1 : 1
                }
            }
        })

        div.forEach(div => {
            div.remove()
        })

        addItem()
    }
}

submitBtn.addEventListener("click", () => {
    div = document.querySelectorAll("div.item")

    div.forEach(div => {
        isset = false

        div.childNodes.forEach(p => {
            if (input.value !== "" && input.value.toLowerCase() === p.innerText.toLowerCase()) {
                isset = true
                return
            }
        })

        if (input.value !== "" && !isset) {
            div.style.display = "none"
        } else {
            div.style.display = ""
        }
    })
})

cBox.addEventListener("change", e => {
    div = document.querySelectorAll("div.item")

    div.forEach(div => {
        div.childNodes.forEach(p => {
            if (e.target.checked) {
                if (p.className === "quantity" && p.innerText === "0") {
                    div.style.display = "none"
                }
            } else {
                div.style.display = ""
            }
        })
    })
})

opt.addEventListener("change", () => {
    sortBtn.childNodes[1].classList.remove("rotate");
    sortBy()
})

sortBtn.addEventListener("click", e => {
    if (opt.value !== "") {
        e.currentTarget.childNodes[1].classList.toggle("rotate")

        if (e.currentTarget.childNodes[1].classList.contains("rotate")) {
            sortBy()
        } else {
            sortBy(true)
        }
    }
})

/**
 * 
 */

addItem()