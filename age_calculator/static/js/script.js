let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let confirm = document.getElementById('confirm');

let dayO = document.getElementById('day_o');
let monthO = document.getElementById('month_o');
let yearO = document.getElementById('year_o');

let wrongDay = document.getElementById('wrongDay');
let wrongMonth = document.getElementById('wrongMonth');
let wrongYear = document.getElementById('wrongYear');

var maxDaysPerMonth = {
    1: 31, // January
    2: isLeapYear(year) ? 29 : 28, // February (considering leap years)
    3: 31, // March
    4: 30, // April
    5: 31, // May
    6: 30, // June
    7: 31, // July
    8: 31, // August
    9: 30, // September
    10: 31, // October
    11: 30, // November
    12: 31 // December
};

// Function to check if it's a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

confirm.addEventListener('click', () => {
    let dayVal = parseInt(day.value); // Convert the value to an integer
    let monthVal = parseInt(month.value);
    let yearVal = parseInt(year.value);
    
    if (isNaN(dayVal)) { // Check if the value is not a number
        wrongDay.textContent = 'must be a valid day';
        wrongDay.parentNode.querySelector('label').classList.add('red_color');
        day.classList.add('red_color');
    }
    else {
        dayO.textContent = day.value;
        wrongDay.textContent = '';
        wrongDay.parentNode.querySelector('label').classList.remove('red_color');
        day.classList.remove('red_color');


    }
    if (isNaN(monthVal)) { // Check if the value is not a number
        wrongMonth.textContent = 'must be a valid month';
        wrongMonth.parentNode.querySelector('label').classList.add('red_color');
        month.classList.add('red_color');
    }
    else {
    // Get the maximum number of days for the specified month
    var maxDays = maxDaysPerMonth[monthVal];

    // Check if the entered day is greater than the maximum allowed for the month
    if (dayVal > maxDays) {
        // Do something if the day is invalid (e.g., display an error message)
        wrongDay.textContent = `must be less than${maxDaysPerMonth[monthVal]}`;
    } else {
        wrongDay.textContent = ``;

    }

        monthO.textContent = month.value;
        wrongMonth.textContent = '';
        wrongMonth.parentNode.querySelector('label').classList.remove('red_color');
        month.classList.remove('red_color');

    }
    if (isNaN(yearVal)) { // Check if the value is not a number
        wrongYear.textContent = 'must be a valid day';
        wrongYear.parentNode.querySelector('label').classList.add('red_color');
        year.classList.add('red_color');
    }
    else {
        yearO.textContent = year.value;
        wrongYear.textContent = '';
        wrongYear.parentNode.querySelector('label').classList.remove('red_color');
        year.classList.remove('red_color');

    }
});
