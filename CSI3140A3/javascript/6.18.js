/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */


document.getElementById('calculateButton').addEventListener('click', function() {

    let num1 = parseInt(prompt("Enter the first integer: "), 10);
    let num2 = parseInt(prompt("Enter the second integer: "), 10);
    let num3 = parseInt(prompt("Enter the third integer: "), 10);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid integers.");
        return;
    }

    let sum = num1 + num2 + num3;
    let average = sum / 3;
    let product = num1 * num2 * num3;

    let smallest = Math.min(num1, num2, num3);
    let largest = Math.max(num1, num2, num3);

    alert(`Sum: ${sum}\nAverage: ${average.toFixed(2)}\nProduct: ${product}\nSmallest: ${smallest}\nLargest: ${largest}`);
});
