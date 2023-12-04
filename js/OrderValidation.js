// Importing functions from a file
import {toggleDisplay} from './commonFunctions.js'

// Validating ice cream options
function iceCreamValidation() {
    let isValidated = false; // or true
    const vanilla = document.getElementById("Vanilla").checked;
    const strawberry = document.getElementById("Strawberry").checked;
    const chocolate = document.getElementById("Chocolate").checked;
    const noIceCream = document.getElementById("noIceCream");

    if ((vanilla == "") && (strawberry == "") && (chocolate == "")) {
        toggleDisplay(noIceCream, true);
    } else {
        toggleDisplay(noIceCream, false);
        isValidated = true;
    }
    return isValidated;
}

// Validating delivery input
function deliveryValidation () {
    let isValidated = false; // or true
    let numberOnly = /^[0-9]/;
    const pickup = document.getElementById("pickup").checked;
    const delivery = document.getElementById("delivery").checked;
    const noPickUpOrDelivery = document.getElementById("noPickUpOrDelivery");

    const address = document.getElementById("address");
    const postcode = document.getElementById("postcode");
    const state = document.getElementById("state");
    const emptyAddress = document.getElementById("emptyAddress");
    const fourDigitPostcode = document.getElementById("fourDigitPostcode");
    const noNumberPostcode = document.getElementById("noNumberPostcode");
    const emptyState = document.getElementById("emptyState");

    const billingAddress = document.getElementById("billingAddress");
    const billingPostcode = document.getElementById("billingPostcode");
    const billingState = document.getElementById("billingState");
    const emptyBillingAddress = document.getElementById("emptyBillingAddress");
    const fourDigitBillingPostcode = document.getElementById("fourDigitBillingPostcode");
    const noNumberBillingPostcode = document.getElementById("noNumberBillingPostcode");
    const emptyBillingState = document.getElementById("emptyBillingState");

    if (!pickup && !delivery) {
        toggleDisplay(noPickUpOrDelivery, true); 
    } else {
        toggleDisplay(noPickUpOrDelivery, false);
        isValidated = true;
    }

    if (pickup && !delivery) {
        isValidated = true;
    }

    if ((!pickup && delivery)) {
        if (address.value == "") {
            toggleDisplay(emptyAddress, true);
        } else {
            toggleDisplay(emptyAddress, false);
            isValidated = true;
        }

        if (postcode.value.length != 4) {
            toggleDisplay(fourDigitPostcode, true);
        } else {
            toggleDisplay(fourDigitPostcode, false);
            isValidated = true;
        }

        if ((postcode.value.length == 4) && (!postcode.match(numberOnly))) {
            toggleDisplay(noNumberPostcode, true);
        } else {
            toggleDisplay(noNumberPostcode, false);
            isValidated = true;
        }

        if (state.value == "") {
            toggleDisplay(emptyState, true);
        } else {
            toggleDisplay(emptyState, false);
            isValidated = true;
        }
        if (billingAddress.value == "") {
            toggleDisplay(emptyBillingAddress, true);
        } else {
            toggleDisplay(emptyBillingAddress, false);
            isValidated = true;
        }

        if (billingPostcode.value.length != 4) {
            toggleDisplay(fourDigitBillingPostcode, true);
        } else {
            toggleDisplay(fourDigitBillingPostcode, false);
            isValidated = true;
        }

        if ((billingPostcode.value.length == 4) && (!billingPostcode.match(numberOnly))) {
            toggleDisplay(noNumberBillingPostcode, true);
        } else {
            toggleDisplay(noNumberBillingPostcode, false);
            isValidated = true;
        }

        if (billingState.value == "") {
            toggleDisplay(emptyBillingState, true);
        } else {
            toggleDisplay(emptyBillingState, false);
            isValidated = true;
        }
    }
    return isValidated;
}

// Validating payment inputs
function paymentValidation() {
    let isValidated = false;
    let numberOnly = /^[0-9]/;
    const payOnPickup = document.getElementById('payOnPickup').checked;
    const payOnline = document.getElementById('payOnline').checked;
    const emptyPay = document.getElementById('emptyPay');

    const visa = document.getElementById('Visa').checked;
    const masterCard = document.getElementById('MasterCard').checked;
    const americanExpress = document.getElementById('AmericanExpress').checked;
    const cardSelect = document.querySelector("input[type='radio'][name=cardDistributor]:checked");

    const emptyCard = document.getElementById('emptyCard');
    const cardNumber = document.getElementById('cardNumber').value;
    const sixteenDigitCardNumber = document.getElementById('sixteenDigitCardNumber');
    const fifteenDigitCardNumber = document.getElementById('fifteenDigitCardNumber');
    const cardNumberOnly = document.getElementById('cardNumberOnly');
    const csv = document.getElementById('CSV').value;
    const threeDigitCSV = document.getElementById('threeDigitCSV');
    const CSVNumberOnly = document.getElementById('CSVNumberOnly');
    const emptyExpiryDate = document.getElementById('emptyExpiryDate');
    const expire = document.getElementById('expire').value;

    function allCardValidation() {
        if (csv.length !== 3) {
            toggleDisplay(threeDigitCSV, true);
        } 
        if (csv.length === 3 && !csv.match(numberOnly)) {
            toggleDisplay(CSVNumberOnly, true);
        } 
        if (expire === "") {
            toggleDisplay(emptyExpiryDate, true);
        } 
    }
    if (!payOnPickup && !payOnline) {
        toggleDisplay(emptyPay, true);
    } 

    if (payOnPickup && !payOnline) {
        isValidated = true;
    }

    if (!payOnPickup && payOnline) {
        if (!visa && !masterCard && !americanExpress) {
            toggleDisplay(emptyCard, true);
        }
        if ((visa || masterCard) && cardSelect) {
            if (cardNumber.length !== 16) {
                toggleDisplay(sixteenDigitCardNumber, true);
                toggleDisplay(fifteenDigitCardNumber, false);
            } 
            if (cardNumber.length === 16 && !cardNumber.match(numberOnly)) {
                toggleDisplay(cardNumber, true);
            } 
            allCardValidation(); 
        }
        if (!visa && !masterCard && americanExpress) {
            if (cardNumber.length !== 15) {
                toggleDisplay(fifteenDigitCardNumber, true);
                toggleDisplay(sixteenDigitCardNumber, false);
            } 
            if (cardNumber.length === 15 && !cardNumber.match(numberOnly)) {
                toggleDisplay(cardNumberOnly, true);
            } 
            allCardValidation(); 
        }
    }
    return isValidated;
}

// Validating verification checkbox
function verifyValidation() {
    let isValidated = false;
    let verify = document.getElementById('verify').checked;
    let notCorrect = document.getElementById('notCorrect');
    if (verify == "") {
        toggleDisplay(notCorrect, true);
    } else {
        toggleDisplay(notCorrect, false);
        isValidated = true;
    }
    return isValidated;
}

// Combine all validations together
function orderValidation() {
    const validateIceCream = iceCreamValidation();
    const validateDelivery = deliveryValidation();
    const validatePayment = paymentValidation();
    const validateVerify = verifyValidation();

    return validateIceCream && validateDelivery && validatePayment && validateVerify;
}

// Get the order values from "Order Now" button in Product site
function GetSelectedIceCreamFromURL(){
    let params = new URLSearchParams(window.location.search);
    let value = params.get('selectIcecream');

    if (!value) {
        return;
    }
    if (value == 'vanilla'){
        const vanillaRadioBtn = document.getElementById("Vanilla");
        vanillaRadioBtn.checked  = true;
    }

    if (value == 'strawberry') {
        const strawberryRadioBtn = document.getElementById("Strawberry");
        strawberryRadioBtn.checked = true;
    }

    if (value == 'chocolate') {
        const chocolateRadioBtn = document.getElementById("Chocolate");
        chocolateRadioBtn.checked = true;
    }
}

// The init function
function init() {
    GetSelectedIceCreamFromURL();

    document.getElementById("contactForm").onsubmit = function(event) {
        if (!orderValidation()) {
            event.preventDefault();
        }
   }
}

// Window onload
window.onload = init;

