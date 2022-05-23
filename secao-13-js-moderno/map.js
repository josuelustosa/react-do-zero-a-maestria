// 4. Método Map
console.log('4. Método Map')

const products = [
    {name: 'Camisa', price: 19.99, category: 'Roupas'},
    {name: 'Air Fryer', price: 249.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça Jeans', price: 69.99, category: 'Roupas'}
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)