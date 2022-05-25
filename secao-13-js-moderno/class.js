// Classes em Javascript
console.log('8. Classes')

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const priceProduct = 350
const discountProduct = 10

const shirt = new Product('Camisa 1 Oficial Flamengo', `${priceProduct}`)

console.log(shirt.name)

console.log(`Preço do produto: R$ ${priceProduct}`)

console.log(`Produto com ${discountProduct}% de desconto: R$`, shirt.productWithDiscount(discountProduct))