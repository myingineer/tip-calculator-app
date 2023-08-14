// Quering all the custom percentage buttons.
const fivePercentTipBtn = document.querySelector('.js-five-percent-btn');
const tenPercentTipBtn = document.querySelector('.js-ten-percent-btn');
const fifteenPercentTipBtn = document.querySelector('.js-fifteen-percent-btn');
const twentyFivePercentTipBtn = document.querySelector('.js-twenty-five-percent-btn');
const fiftyPercentTipBtn = document.querySelector('.js-fifty-percent-btn');

// Quering all the input value fields.
const amountInput = document.querySelector('.js-bill-input');
const customTipInput = document.querySelector('.js-custom-tip-input');
const numberOfPersonInput = document.querySelector('.js-number-of-persons');

// Querying the output displays.
const tipAmountDisplay = document.querySelector('.js-tip-amount');
const totalAmountDisplay = document.querySelector('.js-total-amount');

// Getting the errors display container.
const errorDisplay = document.querySelector('.js-error');
const errorDisplay2 = document.querySelector('.js-third-input');

// Quering the reset button.
const resetButton = document.querySelector('.js-reset-btn');


// To display the error
function showErrorMessage() {
    tipAmountDisplay.innerHTML = 0;
    totalAmountDisplay.innerHTML = 0;
    errorDisplay.style.display = 'block';
    errorDisplay2.classList.add('error2');
}

// To remove the error display.
function hideErrorMessage() {
    errorDisplay.style.display = 'none';
    errorDisplay2.classList.remove('error2');
}


function calculateTip(percentValue) {
    let billAmount = amountInput.value;
    if (!isNaN(billAmount) && !isNaN(numberOfPersonInput.value)) {
        let percentTip = ((((+billAmount * 100) * (percentValue / 100)) / 100) / +numberOfPersonInput.value).toFixed(2);
        tipAmountDisplay.innerHTML = percentTip;


        if (!isNaN(numberOfPersonInput.value) && numberOfPersonInput.value !== '') {
            totalAmountDisplay.innerHTML = ((((+billAmount * 100) / +numberOfPersonInput.value) + (+percentTip * 100)) / 100).toFixed(2);
        } else {
            showErrorMessage();
            setTimeout(() => {
                hideErrorMessage();
            }, 2000);
        };
    };
};



// Fixed calculation for 5% tip btn.
fivePercentTipBtn.addEventListener('click', () => {
    calculateTip(5);
})


// Fixed calculation for 10% tip btn.
tenPercentTipBtn.addEventListener('click', () => {
    calculateTip(10);   
})


// Fixed calculation for 15% tip btn.
fifteenPercentTipBtn.addEventListener('click', () => {
    calculateTip(15);
})


// Fixed calculation for the 25% tip btn.
twentyFivePercentTipBtn.addEventListener('click', () => {
    calculateTip(25);
})


// Fixed calculation for the 50% tip btn.
fiftyPercentTipBtn.addEventListener('click', () => {
    calculateTip(50);
})

// Calculation for custom tip input.
numberOfPersonInput.addEventListener('input', () => {
    let customTipPercent = customTipInput.value;
    let billAmount = amountInput.value;
    if (!isNaN(customTipPercent) && !isNaN(numberOfPersonInput.value)) {
        let customTip = ((((+billAmount * 100) * (+customTipPercent / 100)) / 100) / +numberOfPersonInput.value).toFixed(2);
        tipAmountDisplay.innerHTML = customTip;

        if (!isNaN(numberOfPersonInput.value) && numberOfPersonInput.value !== '') {
            totalAmountDisplay.innerHTML = ((((+billAmount * 100) / +numberOfPersonInput.value) + (+customTip * 100)) / 100).toFixed(2);
        } else {
            tipAmountDisplay.innerHTML = 0;
            totalAmountDisplay.innerHTML = 0;
            errorDisplay.style.display = 'block';
            errorDisplay2.classList.add('error2');
            setTimeout(() => {
                hideErrorMessage();
            }, 2000);
        }
        
    }
})


// To make the Reset Button Work
resetButton.addEventListener('click', () => {
    tipAmountDisplay.innerHTML = 0;
    totalAmountDisplay.innerHTML = 0;
    amountInput.value = '';
    customTipInput.value = '';
    numberOfPersonInput.value = '';
})
