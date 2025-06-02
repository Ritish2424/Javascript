function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//    console.log( number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result=number1+number2
    // return 

    // return number1+number2

}
const result = addTwoNumbers(3, 5)
// console.log("Result:", result)





function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("please enter user name")
        return

    }
    return `${username} just logged in `

}
// console.log(loginUserMessage("Ritish"))//
// console.log(loginUserMessage())



// ... are rest operator
function caluclatecartprice(val1,val2,...num1){
    return num1
}
// console.log(caluclatecartprice(200,400,500,2000))
const user={username:"Ritish",
    prices:199
}
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({username:"Sam",
    price:399
})


const myNewArray=[200,400,100,600]
function  returnSecondValue(getarray)
{
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
