// you can write js here

// console.log('exo-5');

let input = "T’inquiète pas, les baleines ça mange que du kril..."
let vowels = ["a", "à", "â", "ä", "e", "é", "è", "ê", "ë", "i", "î", "ï", "o", "ô", "ö", "u", "û", "ü"]
let resultArray = []

for (i = 0; i < input.length; i++) {
    for (j = 0; j < vowels.length; j++) {
        if (input.charAt(i).toUpperCase() === vowels[j].toUpperCase()) {
            resultArray.push(vowels[j].toUpperCase())
        }
    }
}

resultArray = resultArray.join("")

console.log(resultArray)