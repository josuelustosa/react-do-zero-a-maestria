// Para este arquivo rodar no console, descomente o class.js

// Herança em Javascript
console.log('9. Herança')

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são: ')
        this.colors.forEach(color => console.log(color));
    }
}

const priceHat = 35.99

const hat = new ProductWithAttributes( 'Chapéu NY', priceHat, [
    'Preto',
    'Azul',
    'Vermelho'
])

console.log(`Preço do ${hat.name}: R$ ${priceHat}`)

console.log(`Produto com ${discountProduct}% de desconto: R$`, hat.productWithDiscount(discountProduct))


hat.showColors()