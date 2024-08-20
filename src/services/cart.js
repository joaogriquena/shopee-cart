//quais ações meu carrinho pode fazer
//1 - adicionar item
//2 - remover item
//3- calcular total

async function addItem(userCart, item) {
    userCart.push(item)
}

async function deletItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, index) {

}

async function calculateTotal(userCart) {
    console.log("\n💸💸Shopee Cart TOTAL IS: ")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`Total: ${result}`)
}

async function displayCart(userCart) {
    console.log("\n🛒🛒Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displayCart
}
