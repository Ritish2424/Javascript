//for of
// they are array specific loops
// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {

    // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each charcter is ${greet}`)
}

//maps
const map = new Map()
map.set('In', "India",)
map.set('Us', "United States of America",)
map.set('Fr', "France",)
map.set('In', "India",)

// console.log(map)
for (const [key, value] of map) {
    console.log(key, ':-', value)
}
const myObject = {
    'Game1': "nfs",
    'Game2': "spiderman"
}
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)

// }





