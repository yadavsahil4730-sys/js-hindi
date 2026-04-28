// object literals

//const mySym = Symbol("key1")


//const jsUser ={
  //  name: "sahil",
    //"full name": "Sahil Yadav",
    //[mySym]: "myKey1",
    //age: 20,
    //location : "jaipur",
    //email: "yadavsahil4730@gmail.com",
   // isLoggedIn:false,
    //lastLoginDays: ["monday","friday"]

//}
//console.log(jsUser.age)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])



//jsUser.email= "sahil@chatgpt.com"
//Object.freeze(jsUser)
//jsUser.email = "sahil@microsoft.com"
//console.log(jsUser)


//const tinderUser = {}

//tinderUser.id = "123abc"
//tinderUser.name = "kuku"
//tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"sahil",
            lastname:"yadav"

        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a" ,2: "b"}
const obj2 = { 2: "a", 4: "b"}

const obj3 = Object.assign (obj1,obj2)
console.log(obj3);







