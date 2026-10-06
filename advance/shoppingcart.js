let cart=[]
let user=[
    {
        name: "Shoes",
        price: 2000
    },
    {
        name: "Shirt",
        price: 1000
    }
];
function mycartcalculate(user)
 {let total = 0;

    for (let item of cart) {
        total += item.price
    }

    return total;
}

console.log(mycartcalulate())

