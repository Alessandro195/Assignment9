/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Constants
const HALF_DAY_RATE = 20;
const FULL_DAY_RATE = 35;

// Variables
let dailyRate = FULL_DAY_RATE;
let dayCounter = 0;

// Elements
const days = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCostElement = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

days.forEach((day) => {
    day.addEventListener("click", () => {
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            dayCounter++;
        } else {
            day.classList.remove("clicked");
            dayCounter--;
        }
        calculateTotalCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", () => {
    days.forEach((day) => day.classList.remove("clicked"));
    dayCounter = 0;
    calculateTotalCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", () => {
    dailyRate = HALF_DAY_RATE;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", () => {
    dailyRate = FULL_DAY_RATE;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    const totalCost = dailyRate * dayCounter;
    calculatedCostElement.textContent = `$${totalCost.toFixed(2)}`;
}