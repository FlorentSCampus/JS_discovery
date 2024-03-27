// you can write js here

// console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

let step1 = secretMessage.pop()
let step2 = secretMessage.push("to", "program")
let step3 = secretMessage.splice(secretMessage.indexOf("easily"), 1, "right")
let step4 = secretMessage.shift()
let step5 = secretMessage.unshift("Programming")
let step6 = secretMessage.splice(secretMessage.indexOf("get"), 5, "know")

console.log(secretMessage.join(' '))