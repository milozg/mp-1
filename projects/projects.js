// Function for addition button
function addition(){
    // assign the inputs to variables
    let num1 = Number(document.getElementById("first-input").value);
    let num2 = Number(document.getElementById("second-input").value);
    // perform the addition
    let res = num1 + num2;
    // check if the number is negative and change output color accordingly
    if (res < 0){
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
    // output the result
    document.getElementById("output").innerHTML = String(res);
}

// Function for the subtraction button
function subtraction(){
    // assign the inputs to variables
    let num1 = Number(document.getElementById("first-input").value);
    let num2 = Number(document.getElementById("second-input").value);
    // perform the subtraction
    let res = num1 - num2;
    // check if the number is negative and change output color accordingly
    if (res < 0){
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
    // output the result
    document.getElementById("output").innerHTML = String(res);
}

// Function for the multiplication button
function multiplication(){
    // assign the inputs to variables
    let num1 = Number(document.getElementById("first-input").value);
    let num2 = Number(document.getElementById("second-input").value);
    // perform the multiplication
    let res = num1 * num2;
    // check if the number is negative and change output color accordingly
    if (res < 0){
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
    // output the result
    document.getElementById("output").innerHTML = String(res);
}

// Function for the division button
function division(){
    // assign the inputs to variables
    let num1 = Number(document.getElementById("first-input").value);
    let num2 = Number(document.getElementById("second-input").value);
    // perform the division
    let res = num1 / num2;
    // check if the number is negative and change output color accordingly
    if (res < 0){
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
    // output the result
    document.getElementById("output").innerHTML = String(res);
}

// Function for the power button
function power(){
    // assign the inputs to variables
    let num1 = Number(document.getElementById("first-input").value);
    let num2 = Number(document.getElementById("second-input").value);
    // initialize res as 1
    let res = 1;

    // perform the exponentiation
    for (i = 0; i < num2; i++){
        res = res * num1;
    }

    // check if the number is negative and change output color accordingly
    if (res < 0){
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
    // output the result
    document.getElementById("output").innerHTML = String(res);
}

// Function for the clear button
function clearAll(){
    // Assign inputs and outputs to be ""
    document.getElementById("first-input").value = "";
    document.getElementById("second-input").value = "";
    document.getElementById("output").innerHTML = "";
}