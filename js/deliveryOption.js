// Variable declaration
const pickup = document.getElementById('pickup');
const delivery = document.getElementById("delivery");
const deliveryOption = document.getElementById("deliveryOption");

// Choose the delivery function to display inputs, and pickup to not display
delivery.addEventListener("click", function() {
    if (deliveryOption.classList.contains('display-none')) {
        deliveryOption.classList.remove('display-none');
    }
});

pickup.addEventListener("click", function() {
    if (!deliveryOption.classList.contains('display-none')) {
        deliveryOption.classList.add('display-none');
    }
});

// Variable declaration
const sameDelivery = document.getElementById('sameDelivery');
const address = document.getElementById('address');
const postcode = document.getElementById('postcode');
const state = document.getElementById('state');
const billingAddress = document.getElementById('billingAddress');
const billingPostcode = document.getElementById('billingPostcode')
const billingState = document.getElementById('billingState');
const emptyFields = document.getElementById('emptyFields');

// Checkbox: Same as delivery address
sameDelivery.addEventListener("change", function() {
    if (sameDelivery.checked) {
        if ((address.value == "") || (postcode.value == "") || (state.value == "")) {
            if (emptyFields.classList.contains('display-none')) {
                emptyFields.classList.remove('display-none');
            }
        } else {
            if (!emptyFields.classList.contains('display-none')) {
                emptyFields.classList.add('display-none');
            }
            billingAddress.value = address.value;
            billingPostcode.value = postcode.value;
            billingState.value = state.value;
            billingAddress.disabled = true;
            billingPostcode.disabled = true;
            billingState.disabled = true;
        }
    } else if (!sameDelivery.checked) {
        billingAddress.value = "";
        billingPostcode.value = "";
        billingState.value = "";
        billingAddress.disabled = false;
        billingPostcode.disabled = false;
        billingState.disabled = false;
    }
})





