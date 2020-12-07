// Part 1
const readFile = require('fs').readFileSync

const file = readFile(__dirname + '/ReportRepairInput.txt', 'utf-8')
    .split('\n')
    .filter((_)=> _.trim())
    .map((_)=> parseInt(_, 10))

let sum = []

for(i=0; i< file.length-1; i++){
    for(x=0; x<= file.length; x++){
        if(file[i] + file[x] === 2020 && !sum.includes(file[i])&& !sum.includes(file[i])){
            sum.push(file[i])
            sum.push(file[x])
        }
    }
}

const reducer = (accumulator, item) => {
    return accumulator * item;
  }

console.log("Part 1:" + sum.reduce(reducer))

// Part 2

let sum2 = []

for(i=0; i< file.length-1; i++){
    for(x=0; x< file.length; x++){
        for(y=0; y< file.length; y++)
        if(file[i] + file[x] +file[y] === 2020 && !sum2.includes(file[i])&& !sum2.includes(file[i])&& !sum2.includes(file[y])){
            sum2.push(file[i])
            sum2.push(file[x])
            sum2.push(file[y])
        }
    }
}



console.log("Part 2:" + sum2.reduce(reducer))
