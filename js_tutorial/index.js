// console.log(`hellow`);
// window.alert(`what is going on here`);

// this is a comment
/* 
    this is a commment
    */

// document.getElementById("myHeader").textContent = `hi there`;


/*                           variables                          */

// let x;
// let y = 123;
// let age = 22;
// let price = 10.5;
// let gpa = 3.4;
// let name = "amir123";
// let online = true;

// console.log(typeof online)
// console.log(`your age is ${age} years old and gpa is ${gpa}`)

/*                           arthematic operators                          */


// let sdudent = 30
// console.log(`Students are : ${sdudent}`) 

// sdudent = sdudent + 2
// console.log(`Students are : ${sdudent}`) 

// sdudent = sdudent - 2
// console.log(`Students are : ${sdudent}`) 

// sdudent = sdudent * 2
// console.log(`Students are : ${sdudent}`) 

// sdudent = sdudent / 2
// console.log(`Students are : ${sdudent}`) 

// sdudent = sdudent ** 2
// console.log(`Students are : ${sdudent}`) 

// sdudent = sdudent % 2
// console.log(`Students are : ${sdudent}`) 

// you can use like this too += -= *= %= and so on

/*                           accept user input                          */

// the easy way using prompt
// let userName = window.prompt(`Enter your user name: `);
// console.log(`hi ${userName}`);


// the professional way using html textbox
// let newUserName;
// document.getElementById("submit").onclick = function() {
//     newUserName = document.getElementById("username").value;
//     console.log(`HTML user name is: ${newUserName}`);
//     console.log("hi");
//     window.alert("hi");
// };


/*                           TYPY CONVERSION                          */

// let age = window.prompt("what is youra age");

// age = Number(age);
// age++;
// console.log(++age);

// let x = "amir";
// let y = "amir";
// let z = "amir";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/*                           const                          */
const PI = 3.141;
let res;
document.getElementById("submit").onclick = function(){
    res = Number(document.getElementById("radius").value)
    document.getElementById("myH3").textContent = "result is : " + res * 2 * PI + " cm";
};
