//casos de uso dos itens
//1 - criar um novo iten com subtotal certo

async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem