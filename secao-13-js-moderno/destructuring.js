// 6. Destructuring
console.log('6. Destructuring')

console.log('Destructuring com Array')
const fruits = ['Goiaba', 'Uva', 'Maçã']

const [f1, f2, f3] = fruits
console.log(`Frutas do Array: ${f1}, ${f2} e ${f3}.`)

console.log('...\n')

console.log('Destructuring com Objeto')
const productDetails = {
    name: 'Mouse',
    price: 59.99,
    category: 'Periféricos',
    color: 'Preto'
}

const { name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${productName}, custa ${price}, pertence a categoria ${productCategory} e sua cor é ${color}.`)