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

jsonDatas.forEach(data => {
    Object.keys(trad).forEach(keyTrad => {
        if (keyTrad === data.type) {
            data.trad = trad[keyTrad]
        }
    })
})

let addItem = () => {
    jsonDatas.forEach(data => {
        content = document.createElement("div")
        content.className = "item"

        for (i = 0; i < Object.keys(data).length; i++) {
            p = document.createElement("p")
            p.className = Object.keys(data)[i]
            p.innerText = Object.values(data)[i]
            content.appendChild(p)
        }

        main.appendChild(content)
    })
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

let sortBy = (asc = false) => {
    div = document.querySelectorAll("div.item")

    if (opt.value !== "") {
        jsonDatas.sort((a, b) => {
            if (opt.value === "name") {
                if (a.name < b.name) {
                    return asc ? -1 : 1
                } else {
                    return asc ? 1 : 1
                }
            }

            if (opt.value === "price") {
                if (a.price < b.price) {
                    return asc ? -1 : 1
                } else {
                    return asc ? 1 : 1
                }
            }
        })

        div.forEach(div => {
            div.remove()
        })

        addItem()
    }
}

opt.addEventListener("change", () => {
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

jsonDatas.forEach(data => {
    // console.log(data)
})