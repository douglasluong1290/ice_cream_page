// Importing functions from a file
import {toggleDisplay} from './commonFunctions.js'

// Declaring variables
const payOnPickup = document.getElementById('payOnPickup');
const payOnline = document.getElementById('payOnline');
const onlineOption = document.getElementById('onlineOption');

// Toggle display once clicking on payOnline and disable display when clicking on payOnPickup
payOnline.addEventListener("click", function() {
    toggleDisplay(onlineOption, true);
});

payOnPickup.addEventListener("click", function() {
    toggleDisplay(onlineOption, false);
});


