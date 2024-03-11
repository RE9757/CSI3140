/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

function linearGradient() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 500, 500);
    const numberOfColors = 7;
    const interval = 1 / (numberOfColors - 1);
    const colorStops = [0];

    for (let i = 1; i <= numberOfColors - 2; i++) {
        colorStops.push(i * interval);
    }

    colorStops.push(1);
    gradient.addColorStop(colorStops[0], 'red');
    gradient.addColorStop(colorStops[1], 'orange');
    gradient.addColorStop(colorStops[2], 'yellow');
    gradient.addColorStop(colorStops[3], 'green');
    gradient.addColorStop(colorStops[4], 'blue');
    gradient.addColorStop(colorStops[5], 'indigo');
    gradient.addColorStop(colorStops[6], 'violet');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);
}

window.onload = function() {
    linearGradient();
}