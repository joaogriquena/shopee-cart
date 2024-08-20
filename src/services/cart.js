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
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem
}
