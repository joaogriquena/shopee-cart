import * as cartService from './services/cart.js'
import createItem from "./services/item.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 6)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

// adicionei itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
//await cartService.addItem(myWhishList, item2)

await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart)

// deletei itens do carrinho
// await cartService.deletItem(myCart, item1.name)

await cartService.calculateTotal(myCart)
//await cartService.calculateTotal(myWhishList)
