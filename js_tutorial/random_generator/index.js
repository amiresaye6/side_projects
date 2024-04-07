const rollBtn = document.getElementById("dice");
const container1 = document.getElementById("value1");
const container2 = document.getElementById("value2");
const container3 = document.getElementById("value3");
let randomNumber = 0;
rollBtn.onclick = function(){
    randomNumber = Math.floor(Math.random() * 6 + 1);
    container1.textContent = randomNumber;
    randomNumber = Math.floor(Math.random() * 6 + 1);
    container2.textContent = randomNumber;
    randomNumber = Math.floor(Math.random() * 6 + 1);
    container3.textContent = randomNumber;
}
