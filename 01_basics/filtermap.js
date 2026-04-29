//const coding = ["js", "ruby", "python","cpp"]

//const values = coding.forEach(  (item)  => c {
    //console.log(item);
  //  return item

//});
//console.log(values);


//const myNums= [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter( (num) => num > 4 )
//console.log(newNums);


//const myNumers = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNumers.map( (num) => num+10)
//console.log(newNums);


const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc , currval){
    console.log( `acc:${acc} and currval: ${currval}`);
    return acc + currval
}, 3);
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },

    {
        itemName : "python course",
        price : 1500
    },

    {
        itemName : "pw course",
        price : 2000
    },
]


const priceTopay = shoppingCart.reduce( (acc, item )=> acc + item.price , 0)

console.log(priceTopay);
        


