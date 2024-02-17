
/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

let headsCount = 0;
let tailsCount = 0;

function flip() {//tails false, heads true
    return Math.random() >= 0.5;
}

function updateCounts() {
    document.getElementById('headsCount').textContent = headsCount;
    document.getElementById('tailsCount').textContent = tailsCount;
}

function tossCoin() {
    if (flip()) {
        headsCount++;
    } else {
        tailsCount++;
    }
    updateCounts();
}

document.getElementById('tossButton').addEventListener('click', tossCoin);
