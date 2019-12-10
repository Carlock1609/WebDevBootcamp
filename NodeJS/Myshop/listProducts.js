let faker = require("faker")

function randomItem() {
    for(let i = 0; i < 10; i++) {
        let randomItem = faker.commerce.productName();
        let randomPrice = faker.commerce.price();
        console.log(`${randomItem} - $${randomPrice}`);
    }
}
console.log("===================");
console.log("WELCOME TO ME SHOP!");
console.log("===================");
randomItem();