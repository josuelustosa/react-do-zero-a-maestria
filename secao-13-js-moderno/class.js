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
const discountProduct = 15

const shirt = new Product('Camisa 1 Oficial Flamengo', `${priceProduct}`)

console.log(`Preço da ${shirt.name}: R$ ${priceProduct}`)

console.log(`Produto com ${discountProduct}% de desconto: R$`, shirt.productWithDiscount(discountProduct))