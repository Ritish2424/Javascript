const user = {
    username: "Ritish",
    Price: 999,

    WelcomeMessage: function () {
        console.log(`${this.username},welcome to website `)
        console.log(this);
    }


}
// user.WelcomeMessage()
// user.username="Sam"
// user.WelcomeMessage()
// console.log(this)



// function chai(){
//     let username="Ritish"
//     console.log(this.username);

// }
// chai()


const chai = () => {
    let username = "ritish"
    console.log(this)
}
// chai()

// Arrow Function
// const addtwo =(num1,num2)=>{
//     return num1+num2

// }
// const addtwo =(num1,num2)=> num1+num2
// const addtwo =(num1,num2)=> (num1+num2)
const addtwo =(num1,num2)=> ({username:"Ritish"})



console.log(addtwo(3,4))


// const myArray=[2,5,3,7,8]
// myArray.forEach()