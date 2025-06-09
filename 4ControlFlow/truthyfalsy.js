const userEmail = []
if (userEmail) {
    console.log("got user email")

}

else {
    console.log("dont have user email")
}


//falsy values
// false,0,null,-0,bigint 0n,"",undefined,nan


//truthy values
// "0",'false',"space",[],{},function(){} known as empty function


// if (userEmail.length===0) {
//     console.log("array is emppty")
// }
const emptyobject = {}
if (Object.keys(emptyobject).length === 0) {
    console.log("object is empty")

}


// Nulllish caolescing operator(??) null undefined
let val1;
// val1 = 5 ?? 10

// val1 = nulll ?? 
// val1=undefined ?? 15
val1=null ??10??15

console.log(val1)
// terniary operator
// condition ? true : false


const icedteaprice=100
icedteaprice <=80 ? console.log("less than 80"):console.log("more than 80")

