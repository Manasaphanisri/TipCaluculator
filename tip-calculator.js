let bill = document.getElementById("billAmount");
let tipper = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let button = document.getElementById("calculateButton");
let error = document.getElementById("errorMessage");

button.addEventListener("click", function () {
    let value1 = parseFloat(bill.value);
    let value2 = parseFloat(tipper.value);

    if (isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0) {
        error.textContent = "Please enter valid positive numbers for both fields.";
        tip.value = "";
        total.value = "";
    } else {
        error.textContent = ""; // clear error message
        let value3 = value1 * (value2 / 100); // calculate tip
        tip.value = value3.toFixed(2); // display the tip rounded to two decimals
        total.value = (value1 + value3).toFixed(2); // display the total amount with tip included
    }
});
