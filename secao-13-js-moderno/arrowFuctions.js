// Arrow fuctions
console.log('2. Arrow fuctions (=>)')

// Arrow fuctions sem corpo 
const arrowSum = (a, b) => a + b

console.log('Soma de 2 números com arrow fuctions: ', arrowSum(5, 5))


// Arrow fuctions com corpo
const arrowGreeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(arrowGreeting('Josué'))
console.log(arrowGreeting())

// Arrow fuctions sem parâmetros 
const testeArrow = () => console.log('Testando arrow function sem parâmetros!')

testeArrow()

// Arrow fuctions com .this
const user = {
    name: 'Josué',
    sayUserName() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 100)
    }
}

user.sayUserName()