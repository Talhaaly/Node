

// const obj = {
//     name : "talha",
//     class: "web&app",
//     age: 23
// }


// console.log(obj , '---->');

// setTimeout


// const start = document.getElementById('start');
// const stop = document.getElementById('stop');
// const showName = document.querySelector('#showName')


// const showMyName = () => {
//     showName.innerHTML ="loading..."
//     setTimeout(() => {
//         showName.innerHTML = "Talha Ali Akber"
//     }, 2000);
// }

// start.addEventListener('click', showMyName)


// function myFunction(params) {
//     alert("welcome Talha")
// }


// const stopNum = document.querySelector("p")
// const stopBtn = document.querySelector("#btn")
// const stopBtn2 = document.querySelector("#btnn")

// let num = 100;
// let timeRef;

// const stop = ()=> {
//     stopNum.innerHTML = "Loading..."

//     timeRef =  setInterval(() => {
//         stopNum.innerHTML = `${num}`;
//         num--
//     }, 1000);
// }

// stopBtn.addEventListener("click", stop)

// stopBtn2.addEventListener('click', ()=> {
//     clearInterval(timeRef)
// })





// OBJECT 


// let bioData = {
//     Name : "Talha",
//     Age : 23,
//     class: "Web&App",
//     getData : function (){
//         console.log(this.Age);
//     }
// }
// bioData.getData();
// console.log(bioData);

// 2nd Method 

// let bioData = {
//     Name : "Talha",
//     Age : 23,
//     class: "Web&App",
//     getData  (){
//         console.log(this.class);
//     }
// }
// bioData.getData();
// console.log(bioData);


// 3rd way 

// let myData = {
//     myName : {
//         fName : "Talha",
//         MName : "Ali",
//         lName: "Akber"
//     },
//     age: 23,
//     class: "web&app"
// }

// console.log(myData);

// console.log(myData.myName.MName);



// fat arrow function main this property nhi use kr skty 

// const obj = {
//     myAge : 23,
//     myName: () => {
//         console.log(this);
//     }
// }

// obj.myName()


// let myBio = {
//     myName : {
//         fName : "Talha",
//         MName : "Ali",
//         lName: "Akber"
//     },
//     age: 23,
//     class: "web&app",
//     getData () {
//         console.log(`my name is ${this.myName.fName} & my age is ${this.age}`);
//     }
// }
// myBio.getData()


// Destructuring in Es6 







// ===============================================================


// Asynchronous
// =========================================================================
// promises
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#jokes")
const jokebtn = document.querySelector("#jokebtn")

const generatejokes = () => {
    setTimeout(() => {
        jokes.innerHTML = 'New Joke is loading...'
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        fetch('https://icanhazdadjoke.com/', setHeader)
            .then((res) => res.json())
            .then((data) => {
                jokes.innerHTML = data.joke
            }).catch((err) => err)
    }, 1000);
}
jokebtn.addEventListener('click', generatejokes)

generatejokes()

// ===============================================================================





















