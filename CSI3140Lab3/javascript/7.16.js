/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */




document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.querySelector('table');

    for (var n = 1; n <= 6; n++) {
        var row = tableBody.insertRow();
        for (var multiplier = 0; multiplier <= 3; multiplier++) {
            var cell = row.insertCell();
            cell.textContent = n * Math.pow(10, multiplier);
        }
    }
});
