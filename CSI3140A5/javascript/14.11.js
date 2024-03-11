/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */


document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        // // Draw a circle
        // ctx.beginPath();
        // ctx.arc(500, 500, 50, 0, Math.PI * 2);
        // ctx.fillStyle = 'mediumslateblue';
        // ctx.fill();

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'black'];
    
        for (let i = 8; i > 0; i--) {
            let radius = 5 + i * 5;
    
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();
            ctx.closePath();
        }
    }
});
