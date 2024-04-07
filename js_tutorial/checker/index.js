const subscribed = document.getElementById("checked");
const visaBtn = document.getElementById("radio1");
const masterBtn = document.getElementById("radio2");
const paypalBtn = document.getElementById("radio3");
const submitBtn = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

submitBtn.onclick = function(){
    if (subscribed.checked){
        subResult.textContent = `You Are Subscribed :)`;
    }
    else{
        subResult.textContent = `You Are Not Subscribed`
    }

    if (visaBtn.checked) {
        cardResult.textContent = `You are paying with Visa`;
    }

    else if (masterBtn.checked) {
        cardResult.textContent = `You are paying with Master Card`;
    }

    else if (paypalBtn.checked) {
        cardResult.textContent = `You are paying with PayPal`;
        subscribed.checked = true;
    }
    else {
        cardResult.textContent = `You must select a payment method`;

    }
}
