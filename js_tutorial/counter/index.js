const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLable = document.getElementById("counter");
let res = 0;

decreaseButton.onclick = function(){
    res -= 1;
    countLable.textContent = res;
}

resetButton.onclick = function(){
    res = 0;
    countLable.textContent = res;
}

increaseButton.onclick = function(){
    res += 1;
    countLable.textContent = res;
}
