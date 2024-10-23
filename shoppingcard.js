const products = [
    {name:'Shampo', price:500, quantity:2},
    {name:'Shampo', price:500,quantity:3},
    {name:'Shampo', price:500, quantity:5},
    // {name:'Chiruni', price:100, quantity:1},
    // {name:'Shirt', price:700,quantity:8},
    // {name:'Pant', price:1200,quantity:7},

]

function cartTotal(products){
    let total = 0;
    for(const product of products){
       
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const shoppingCart = cartTotal(products);
console.log(shoppingCart);