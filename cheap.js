const mobiles = [
    { name:'Samsung', price:9000, camera:'12mp', color:'black'},
    { name:'sawmi', price:10000, camera:'12mp', color:'black'},
    { name:'Oppo', price:30000, camera:'12mp', color:'black'},
    { name:'Iphone', price:50000, camera:'12mp', color:'black'},
    { name:'Walton', price:27000, camera:'12mp', color:'black'},
    { name:'HTC', price:40000, camera:'12mp', color:'black'},
]


function getCheapestPhone(mobiles){
    let max = mobiles[0];
    for(const mobile of mobiles){
      if(mobile.price > max.price){
        max = mobile;
      }
    }
    return max;

}

const cheap = getCheapestPhone(mobiles);

console.log('cheapest phone is:', cheap);