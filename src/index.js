import * as cartService from './services/cart.js'
import createItem from "./services/item.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

// adicionei itens ao carrinho
await cartService.addItem(myCart, item1)
//await cartService.addItem(myWhishList, item2)

console.log("Shopee Cart TOTAL IS: ")

// deletei itens do carrinho
await cartService.deletItem(myCart, item1.name)

await cartService.calculateTotal(myCart)
//await cartService.calculateTotal(myWhishList)
