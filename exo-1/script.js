// you can write js here
// console.log('hello from file');

let kelvins = 294
let celsius = (kelvins - 273) // calculates celsius variable with the kelvins value by subtracting 273 
let fahrenheits = (celsius * (9/5) + 32)
let floorFahrenheits = Math.floor(fahrenheits)

kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

console.log(`${kelvins} \n ${celsius} \n ${fahrenheits} \n ${floorFahrenheits} \n`)