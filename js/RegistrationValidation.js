// Import the functions from a file
import {toggleDisplay} from './commonFunctions.js'

// Validate the registration form
function validateForm() {
    const firstName = document.getElementById("firstname").value;
    const firstNameEmpty = document.getElementById("firstNameEmpty");

    const lastName = document.getElementById("lastname").value;
    const lastNameEmpty = document.getElementById("lastNameEmpty");

    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const unknown = document.getElementById("unknown").checked;
    const genderEmpty = document.getElementById("genderEmpty");

    const address = document.getElementById("address").value;
    const addressEmpty = document.getElementById("addressEmpty");

    const postcode = document.getElementById("postcode").value;
    const postcodeFourDigit = document.getElementById("postcodeFourDigit");
    const postcodeOnlyNumber = document.getElementById("postcodeOnlyNumber");


    const state = document.getElementById("state").value;
    const stateEmpty = document.getElementById("stateEmpty");

    const email = document.getElementById("email").value;
    const emailEmpty = document.getElementById("emailEmpty");

    const password = document.getElementById("password").value;
    const confirmedPassword = document.getElementById("password2").value;
    const passwordNineDigit = document.getElementById("passwordNineDigit");
    const passwordConfirmFailed = document.getElementById("passwordConfirmFailed");

    const notarobot = document.getElementById("notarobot").checked;
    const robotDetected = document.getElementById("robotDetected");

    let result = true;
    let numberOnly = /^[0-9]/;

    if (firstName == "") {
        toggleDisplay(firstNameEmpty, true);
        result = false;
    } else {
        toggleDisplay(firstNameEmpty, false);
        
    }

    if (lastName == "") {
        toggleDisplay(lastNameEmpty, true);
        result = false;
    } else {
        toggleDisplay(lastNameEmpty, false);
        
    }

    if ((male == "") && (female == "") && (unknown == "")) {
        toggleDisplay(genderEmpty, true);
        result = false;
    } else {
        toggleDisplay(genderEmpty, false);
        
    }

    if (address == "") {
        toggleDisplay(addressEmpty, true);
        result = false;
    } else {
        toggleDisplay(addressEmpty, false);
        
    }
     
    if (postcode.length != 4) {
        toggleDisplay(postcodeFourDigit, true);
        result = false;
    } else {
        toggleDisplay(postcodeFourDigit, false);
        
    }
    
    if ((postcode.length == 4) && (!postcode.match(numberOnly))) {
        toggleDisplay(postcodeOnlyNumber, true);
        result = false;
    } else {
        toggleDisplay(postcodeOnlyNumber, false);
        
    }
    
    if (state == "") {
        toggleDisplay(stateEmpty, true);
        result = false;
    } else {
        toggleDisplay(stateEmpty, false);
    }

    if (email == "") {
        toggleDisplay(emailEmpty, true);
        result = false;
    } else {
        toggleDisplay(emailEmpty, false);
    }

    if (password.length < 9) {
        toggleDisplay(passwordNineDigit, true);
        result = false;
    } else {
        toggleDisplay(passwordNineDigit, false);
        
    }

    if (confirmedPassword != password) {
        toggleDisplay(passwordConfirmFailed, true);
        result = false;
    } else {
        toggleDisplay(passwordConfirmFailed, false);
        
    }

    if (notarobot == "") {
        toggleDisplay(robotDetected, true);
        result = false;
    } else {
        toggleDisplay(robotDetected, false);
        
    }

    return result;
}

// The init function
function init() {
    document.getElementById("contactForm").onsubmit = validateForm;
}

// Window onload
window.onload = init;
