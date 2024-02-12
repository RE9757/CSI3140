/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */


// Function to get a number input from the user and return it as an integer
function getNumberInput(message) {
    var input = prompt(message);
    var number = parseInt(input, 10);
    while (isNaN(number)) {
        input = prompt("Invalid input. Please enter a valid number:");
        number = parseInt(input, 10);
    }
    return number;
}

// Main function to find the max number
function findMaxNumber() {
    var numbers = []; // Array to store numbers

    // Getting 5 numbers from user
    for (let i = 1; i <= 5; i++) {
        numbers.push(getNumberInput(`Enter the ${i}th number:`));
    }

    var maxNumber = Math.max(...numbers); // Finding the max number

    // Display the results
    document.writeln(`<h1>The max number is ${maxNumber}</h1>`);
}

// Run the main function when the script loads
findMaxNumber();
