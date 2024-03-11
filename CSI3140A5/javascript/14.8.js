/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

function verticalLinearGradient(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.beginPath();
    ctx.moveTo(width/2, height/4);
    ctx.lineTo(width/2+120, height/4+160);
    ctx.lineTo(width/2-120, height/4+160);
    ctx.lineTo(width/2, height/4);
    ctx.closePath();
    let gradient = ctx.createLinearGradient(width/2, height/4, width/2, height/4+80);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.9, 'purple');
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();
}

window.onload = function() {
    verticalLinearGradient();
}