const products = [
    {name:'Shampo', price:500},
    {name:'Chiruni', price:100},
    {name:'Shirt', price:700},
    {name:'Pant', price:1200}
]


function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
    const total = getShoppingTotal(products);
    console.log('total ajke khosabe:', total);