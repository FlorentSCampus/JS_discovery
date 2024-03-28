// Cours 8 de Codecademy
// console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(`Joe possède ${joeInfo["cars"].length} voitures`)

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

console.log(`Joe possède ${joeInfo["bathrooms"] + 7} salles de bains`)

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo["garage"] = true
if (joeInfo["garage"]) {
    console.log(`Joe vient d'acquérir 1 garage`)
}

/**
 * STEP 2
 */

let firstName = ["Louis", "Pierre", "Jean", "Paul", "Jacques", "François", "Michel", "Philippe", "Antoine", "Guillaume", "Alexandre", "Nicolas", "Vincent", "Étienne", "Gabriel", "Charles", "Mathieu", "Thierry", "Sébastien", "Thomas", "Hugo", "David", "Maxime", "Lucas", "Romain", "Julien", "Damien", "Benoît", "Adrien", "Franck", "Olivier", "Arthur", "Cédric", "Laurent", "Jérôme", "Gilles", "Baptiste", "Sylvain", "Yann", "Alexis", "Fabien", "Maurice", "Henri", "Rémi", "Thibault", "Martin", "Éric", "Christophe", "Raphaël"]

let lastName = ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Lefebvre", "Michel", "Garcia", "David", "Bertrand", "Roux", "Vincent", "Fournier", "Morel", "Girard", "André", "Lefevre", "Mercier", "Dupont", "Lambert", "Bonnet", "François", "Martinez", "Legrand", "Garnier", "Faure", "Rousseau", "Blanc", "Guerin", "Muller", "Henry", "Roussel", "Nicolas", "Perrin", "Morin", "Mathieu", "Clement", "Gauthier", "Dumont", "Lopez", "Fontaine", "Chevalier"]

let country = ["Afrique du Sud", "Angleterre", "Argentine", "Australie", "Écosse", "États-Unis", "Fidji", "France", "Galles", "Géorgie", "Irlande", "Italie", "Japon", "Namibie", "Nouvelle-Zélande", "Pays de Galles", "Russie", "Samoa", "Tonga", "Uruguay"]

let playersNb = 22
let gamesNb = 10

let team = {
    players: [],
    games: []
}

let addPlayer = (firstName, lastName, age) => {
    team["players"].push({ firstName: firstName, lastName: lastName, age: age })
}

let addGame = (opponent, teamPoints, opponentPoints) => {
    team["games"].push({ opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints })
}

let generatePlayers = (playersNb) => {
    for (i = 0; i < playersNb; i++) {
        let newFirstName = firstName[Math.floor(Math.random() * firstName.length)]
        let newLastName = lastName[Math.floor(Math.random() * lastName.length)].toUpperCase()
        let newAge = (Math.round(Math.random() * (31 - 18)) + 18)

        addPlayer(newFirstName, newLastName, newAge)
    }
}

let generateGames = (gamesNb) => {
    for (i = 0; i < gamesNb; i++) {
        let newOpponent = country[Math.floor(Math.random() * country.length)]
        let newTeamPoints = (Math.round(Math.random() * (142 - 0)) + 0)
        let newOpponentPoints = (Math.round(Math.random() * (142 - 0)) + 0)

        addGame(newOpponent, newTeamPoints, newOpponentPoints)
    }
}

let totalPoints = () => {
    let sum = 0

    for (i = 0; i < team["games"].length; i++) {
        sum = (sum + team["games"][i]["teamPoints"])
    }

    return sum
}

let averagePoints = () => {
    let sum = 0

    for (i = 0; i < team["games"].length; i++) {
        sum = (sum + team["games"][i]["opponentPoints"])
    }

    return (sum / team["games"].length)
}

let findOlderPlayerOne = (filter = true, maxAge = true) => {
    let olderPlayers = []

    if (filter) {
        team["players"].sort((a, b) => {
            if (a.age < b.age) {
                return 1
            } else {
                return -1
            }
        })

        if (maxAge) {
            for (i = 0; i < team["players"].length; i++) {
                if (olderPlayers.length === 0) {
                    olderPlayers[i] = team["players"][i]
                }
                if (team["players"][i]["age"] >= olderPlayers[olderPlayers.length - 1]["age"]) {
                    olderPlayers[olderPlayers.length] = team["players"][i]
                }
            }

            return olderPlayers
        }
    } else {
        return team["players"]
    }
}

let abcOrder = (filter = true) => {
    if (filter) {
        team["players"].sort((a, b) => {
            if (a.firstName < b.firstName) {
                return -1
            } else {
                return 1
            }
        })

        return team["players"]
    } else {
        return team["players"]
    }
}

generatePlayers(playersNb)
generateGames(gamesNb)

//

console.log(`La somme des points de notre équipe s'élève à : ${totalPoints()} points`)
console.log(`La moyenne des points de l'équipe adverse s'élève à : ${averagePoints()} points`)
console.log(findOlderPlayerOne())
console.log(abcOrder())
