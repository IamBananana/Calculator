/**
 * @author Richie!
 * display is always linked to element "display", hence "const"
 */
const display = document.getElementById("display");

/**
 * 
 * @param {*} input the input is recieved from <input> html and appends
 *                  to the display.value
 */
function appendToDisplay(input) {
    display.value += input;
}

//set display to empty
function clearDisplay() {
    display.value = "";
}

//get the value from display and use the inbuilt eval() method. This method
//sucks and works as a template for now. Also if error we type error to display
function calculate() {
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        display.value = "Error";
    }
}
//small check to see if you start with a comma which is not possible
function commaCheck() {
    if (display.value == "") {
        display.value = "Brrrrr";
    } else {
        appendToDisplay(",");
    }
}
//SQUIRT
function squirt() {
    display.value = "Squirt";
}
