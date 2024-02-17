
function start(){
    var button = document.getElementById("calculateButton");
    button.addEventListener("click", displayArea, false);
}

function displayArea(){
    var inputField = document.getElementById("radiusField");
    var radius = parseFloat(inputField.value);
    var result = document.getElementById("result");
    result.innerHTML = "Circle Area is: " + circleArea(radius);
}

function circleArea( radius ){
    return Math.PI*Math.pow(radius, 2);
}

window.addEventListener("load", start, false);
