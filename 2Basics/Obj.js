const mysym=Symbol("key1")

const JsUser={
    name: "Ritish",
    "fullname":"ritish kanojia",
    age: 21,
    location: "jaipur",
    email: "ritish2424@uk.in",
    isLoggedIn: false,
    lastLoginDay: ["monday", "saturday"],
    [mysym]:"mykey1"

}

// console.log(JsUser["email"])
// console.log(JsUser.email)
// console.log(JsUser["fullname"])
// console.log(JsUser["mysym"])
// console.log(typeof JsUser["mysym"])

// JsUser.email="ritish@chatgpt.co"
// Object.freeze(JsUser)
// JsUser.email="ritish@microsoftgpt.co"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello jsuser")
}
// console.log(JsUser.greeting)


JsUser.greetingtwo=function(){
    console.log(`Hello jsuser,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())




