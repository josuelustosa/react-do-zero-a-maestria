// 7. Spread operator
console.log('7. Spread operator')

console.log('Spread operator com Array')
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = [...array1, ...array2]

console.log(array3)

console.log('...\n')

console.log('Spread operator com Objeto')
const carName = { name: 'Gol' }
const carBrand = { brand: 'VW' }
const otherInfos = { km: 80000, price: 49000 }

const car = {...carName, ...carBrand, ...otherInfos, whells: 4}

console.log(car)