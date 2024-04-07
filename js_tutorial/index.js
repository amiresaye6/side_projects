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
// const PI = 3.141;
// let res;
// document.getElementById("submit").onclick = function(){
//     res = Number(document.getElementById("radius").value)
//     document.getElementById("myH3").textContent = "result is : " + res * 2 * PI + " cm";
// };


/*                           Math                          */

// let val =  Math.PI
// console.log(val)
// console.log("hi")

// let x = 3.59;
// let y = 5;
// let z;

// z = Math.sign(-1.2);
// z = Math.sin(-1.2);
// z = Math.cos(-1.2);
// z = Math.tan(-1.2);
// z = Math.abs(-1.2);
// console.log(Math.round(x)) // 4.5 >> 5, 4.4 >> 4
// console.log(Math.floor(x)) // 4.4 >> 4, 4.9 >> 4
// console.log(Math.ceil(x)) // 4.4 >> 5, 4.9 >> 5
// console.log(Math.trunc(x)) // remove any decimal number >> 4.9 >> 4, 4.0 >> 4


/*                           random                          */

// let max = 100;
// let min = 50;

// let randomNumber = Math.floor(Math.random() * (max - min) + min)
// console.log(randomNumber)


/*                           if statment                          */

// let palance = 100;

// if (palance <= 80) {
//     console.log("you are not allawed:<");
// }
// else {
//     console.log("welcome")
// }

// let age = 22;
// let hasLicence = false;

// if (age >= 20) {
//     console.log("YOU ARE OLD ENOUGH TO DRIVE")
//     if (hasLicence) {
//         console.log("you can drive, you have the licnce")
//     }
//      else if (age < 0) {
    
// }
//     else {
//         console.log("noooooooooooooooo")
//     }
// }

/*                           ternery operator                          */

// let age = 22;

// let condition = age >= 20 ? `YOU ARE AN ADULT` : `YOU ARE TOOO YOUNG`;

// console.log(condition)

// let isStudent = true;

// let inroled = isStudent ? "welcome to school" : "you are not inrolled here"

// console.log(inroled)


/*                           switch cases                          */

// let day = 1;

// switch (day) {
//     case 1:
//         console.log("today is satarday :)")
//         break;

//     case 3:
//         console.log("today is sudnay :)")
//         break;

//     case 2:
//         console.log("today is monday :)")
//         break;

//     default:
//         break;
// }

// switch(true) {
//     case day % 2 == 0:
//         //do something
//         break
// }

/*                           string manublation                          */

// let name = "amir alsayed Abdulsamea mohamed                 ";

// console.log(name.charAt(2));
// console.log(name.indexOf('A'));
// console.log(name.lastIndexOf("m"));
// console.log(name.length);
// console.log(name.trim()); // remove extra white spaces
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.repeat(10));
// console.log(name.startsWith("amir"));
// console.log(name.endsWith("amir"));
// console.log(name.includes("amir"));

// let phone = "123 456 7890";
// console.log(phone.replaceAll(" ", ""));
// console.log(phone.padStart(15, 0)); //after the length specified, it adds the sechod valeu to the string
// console.log(phone.padEnd(15, 0)); //after the length specified, it adds the sechod valeu to the string
