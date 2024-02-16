const display = document.getElementById("display");

function appendNewValue(input){
    display.value += input;
}

// clear the display
function clearDisplay(){
    display.value = "";
}

// now perform the calculation
function showResult(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "error";
        setTimeout(clearDisplay , 3000)
    }
}