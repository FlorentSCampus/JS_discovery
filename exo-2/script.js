// you can write js here
// console.log('exo-2');

const myDate = new Date()

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
let currentDay = myDate.getDay()
let currentHours = myDate.getHours()
let dayMessage = `Nous sommes actuellement ${days[currentDay]}`

const isTesting = false;

let getDay = (currentDay) => {
    if (currentDay > 0 && currentDay < 6) {
        console.log(`${dayMessage}, jour de la semaine`)
        if (currentDay === 5 && currentHours >= 17) {
            console.log(`${dayMessage}, c'est le WE !`)
        }
    } else {
        console.log(`${dayMessage}, jour du weekend`)
    }
}

if (isTesting) {
    let day = prompt("Entrez un jour de la semaine :")
    day = day[0].toUpperCase() + day.slice(1)
    currentDay = days.indexOf(day)
    dayMessage = `Nous sommes actuellement ${days[currentDay]}`
    getDay(currentDay)
} else {
    getDay(currentDay)
}