/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */


document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const canvasSize = 500;
    const radius = 20; // Circle radius
    const speed = 2; // Movement speed
    let x = canvasSize / 2;
    let y = radius;
    let dx = speed;
    let dy = speed;
    let phase = 0; // Start at the top center

    function drawCircle() {
        ctx.clearRect(0, 0, canvasSize, canvasSize); 
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true); 
        ctx.fill();
    }

    function animate() {
        drawCircle();


        switch (phase) {
            case 0: // Move from top center to left center
                x -= dx;
                y += dy;
                if (x <= radius) {
                    phase = 1;
                }
                break;
            case 1: // Move from left center to bottom center
                x += dx;
                y += dy;
                if (y >= canvasSize - radius) {
                    phase = 2;
                }
                break;
            case 2: // Move from bottom center to right center
                x += dx;
                y -= dy;
                if (x >= canvasSize - radius) {
                    phase = 3;
                }
                break;
            case 3: // Move from right center to top center
                x -= dx;
                y -= dy;
                if (y <= radius) {
                    phase = 0;
                }
                break;
        }

        requestAnimationFrame(animate); 
    }

    animate();
});
