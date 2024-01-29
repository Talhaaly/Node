// There are two parts promise consumed and promise create 
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task-1");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise consumed");
// })


// const promise_2 = new Promise (function(resolve , reject){
//     setTimeout(function(){
//         resolve({user: "Talha", email: "talha@gmail.com"})
//     },1000)
// })

// promise_2.then(function(user){
//     console.log(user);
// })


// const promise_3 = new Promise(function(resolve , reject) {
//     setTimeout(function(){
//         let error = true;
//         // let error = false;
//         if(!error){
//             resolve({name: "Talha Ali" , pass: "123456"})
//         }else{
//             reject('ERROR: js went wrong')
//         }
//     },1000)
// })

// async function consumePromise_3 () {
//    try {
//     const response = await promise_3
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }

// consumePromise_3()




// fetch('https://maroon-shorts.cyclic.cloud/api/filterations/all')
// .then((response)=> {
// return response.json()
// })
// .then((data)=> {
//     console.log(data);
// })
// .catch((error)=> {
//     console.log('E', error);
// })

















































