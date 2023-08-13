// // 1:

// function success(){
//     let successPromise = new Promise((resolve, reject) => {
//         resolve("success")
//     })

//     return successPromise

// }
// success()
//     .then((val)=> console.log(val))


// 2
// function namea(firstName, lestName) {
//     setTimeout(() => {
//        console.log(firstName + ' ' + lestName); 
//     }, 1000);
// }
// namea("israel", "rozen")




// 3:
// function addFive(num) {
//     setTimeout(() => {
//         console.log(num + 5);
//     }, 500);
// }


// function multiplyByTwo(num) {
//     setTimeout(() => {
//         console.log(num * 2);
//     }, 500);
// }

// multiplyByTwo(4)

// function subtractTen(num) {
//     setTimeout(() => {
//         console.log(num - 10);
//     }, 500);
// }
// subtractTen(50)




// addFive(50).then((res)=>        multiplyByTwo(res)        )
    










// console.log(1);
// console.log(2 * 2 * 2 * 2 * 2);
// console.log(1);

// let n = "israel";

// const changeName = () => {
//   setTimeout(() => {
//     n = "jonathan";
//     console.log(n);
//   }, 1000);
// };

// n = changeName()

// let object = new Promise((resolve, reject) => {
//     if (5 == 5) {
//         resolve("correct!")
//     } else {
//         reject("field!")
//     }
// })

// object["then"]((e)=> console.log(e))
// object.then((e)=> console.log(e))
// object.catch((e) => console.log(e))

const myUrl = "https://jsonplaceholder.typicode.com/users"

const fdata = async (url)=>{
    const resp = await fetch(url)
    


}