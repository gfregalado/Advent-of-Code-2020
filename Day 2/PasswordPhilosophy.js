// Part 1
const readFile = require('fs').readFileSync

const file = readFile(__dirname + '/PasswordPhilosophyInput.txt', 'utf-8')
    .split('\n')
    .filter((_)=> _.trim())

let validPasswords = []

for(i=0; i<file.length; i++){
    let password = file[i].split(" ")
    let sections = password[0].split("-")
    let a = sections[0]
    let b = sections[1]
    let char = file[i].charAt(file[i].indexOf(":") - 1)
    let letterCount = password[2].split(char).length - 1

    if (letterCount >= a && letterCount <= b) validPasswords.push(file[i])
}

console.log(validPasswords.length)

// Part 2

let validPasswords2 = []

for(i=0; i<file.length; i++){
    let password = file[i].split(" ")
    let sections = password[0].split("-")
    let a = sections[0]
    let b = sections[1]
    let char = file[i].charAt(file[i].indexOf(":") - 1)

    if ((password[2].charAt(a-1) === char && password[2].charAt(b-1) != char) ||(password[2].charAt(a-1) != char && password[2].charAt(b-1) === char)) validPasswords2.push(file[i])
}

console.log(validPasswords2.length)