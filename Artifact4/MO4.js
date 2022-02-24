window.validateZipCode = function() {

    // get currently selected country
    var countrySelectElem = document.getElementById('country');
    var countryValue = countrySelectElem.options[countrySelectElem.selectedIndex].value;

    // if US, require 5-digit postal code
    if (countryValue === 'US') {
        if (isNaN(iZipCode.value) == false && iZipCode.value.length == 5) {
            resetZipCode();
            return true;
        } else {
            lZipCodeLabel.style.color = "red";
            dZipCodeError.innerHTML = "Your US Zip Code must be numeric and 5 integers long.";
            return false;
        } // end if
    

} // end validateZipCode()