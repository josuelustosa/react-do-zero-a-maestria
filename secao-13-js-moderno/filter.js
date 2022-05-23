// 3. Método Filter
console.log('3. Método Filter')

const arr = [1, 2, 3, 4, 5]

console.log('Números do array: ', arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
})

console.log('Números filtrados do array (maiores que 3): ', highNumbers)

console.log('...\n')

const users = [
    { name: 'Josué', avaliable: true},
    { name: 'Waldiza', avaliable: false},
    { name: 'Acsa', avaliable: false},
    { name: 'Josué Filho', avaliable: true},
    { name: 'Areta', avaliable: false},
    { name: 'Gusttavo', avaliable: true},
]

console.log('Nomes no array: ', users)

const avaliableUsers = users.filter((user) => user.avaliable)
const notAvaliableUsers = users.filter((user) => !user.avaliable)

console.log('Nomes filtrados do array (avaliable = true): ', avaliableUsers)
console.log('Nomes filtrados do array (avaliable = false): ', notAvaliableUsers)
