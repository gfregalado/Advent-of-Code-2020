const readFile = require('fs').readFileSync

const file = readFile(__dirname + '/TobogganTrajectoryInput.txt', 'utf-8')
    .split('\n')
    .filter((_)=> _.trim())

let map = []

file.forEach(ele => (map.push(ele + ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele + ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ele + ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele + ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele + ele + ele + ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele+ ele)));

let slope1treesCounter = 0
let slope2treesCounter = 0
let slope3treesCounter = 0
let slope4treesCounter = 0
let slope5treesCounter = 0

let rightMove2 = 3
let rightMove3 = 5
let rightMove4 = 7
let rightMove5 = 2


//Slope 1
for(i=0; i < map.length; i++){
    if(map[i][i] === "#"){
        slope1treesCounter++
    }
}

//Slope 2
for(i=1; i< map.length; i++){
    if(map[i][rightMove2] === "#"){
        slope2treesCounter++
    }
    rightMove2 = rightMove2 + 3
}

//Slope 3
for(i=1; i< map.length; i++){
    if(map[i][rightMove3] === "#"){
        slope3treesCounter++
    }
    rightMove3 = rightMove3 + 5
}

//Slope 4
for(i=1; i< map.length; i++){
    if(map[i][rightMove4] === "#"){
        slope4treesCounter++
    }
    rightMove4 = rightMove4 + 7
}

//Slope 5
for(i=1; rightMove5 < map.length; i++){
    if(map[rightMove5][i] === "#"){
        slope5treesCounter++
    }
    rightMove5 = rightMove5 + 2
}


let total = slope1treesCounter * slope2treesCounter * slope3treesCounter *slope4treesCounter *slope5treesCounter

console.log("total = " + total)




