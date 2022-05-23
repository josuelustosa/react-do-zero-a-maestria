// Utilizando var, let e const
console.log('1. Variáveis')

// VAR -------------------

var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log('VAR "x" do escopo: ', x)
}

console.log('VAR "x" do escopo: ', x)
console.log('...\n')

// LET -------------------

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log('LET "a" do escopo: ', a)
}

console.log('LET "a" global: ', a)
console.log('...\n')

let i = 100

for (let i = 1; i < 5; i++){
    console.log('LET "i" do escopo (for): ', i)
}
console.log('LET "i" global: ', i)

console.log('...\n')
// CONST -------------------

function logName() {
    const NAME = 'Josué Lustosa'
    console.log('CONST "NAME" do escopo: ', NAME)
}

const NAME = 'Josué Filho'

logName()

console.log('CONST "NAME" global: ', NAME)
