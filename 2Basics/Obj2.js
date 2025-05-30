// const tinderuser=new Object();
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.isLoggedIn = "false"
// console.log(tinderuser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ritish",
            lastname: "kanojia"
        }
    }
}
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 1: "a", 2: "b" }
// const obj3={obj1,obj2}
// console.log(obj3)
// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)




const users = [
    {
        id: 1,
        email: "h@gamil.uu"
    },
    {
        id: 1,
        email: "h@gamil.uu"
    },
    {
        id: 1,
        email: "h@gamil.uu"
    },
]
// console.log(users[1].email)
// console.log(tinderuser)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('isLoggedIn'))
// console.log(tinderuser.hasOwnProperty('isLogged'))







const course={
    coursename:"js hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor);
// or
// const{courseInstructor}=course;
// console.log(courseInstructor)


// const {courseInstructor:instructor}=course
// console.log(instructor)








