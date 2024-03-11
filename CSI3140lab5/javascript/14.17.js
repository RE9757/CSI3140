/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */



window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('artCanvas');
    const ctx = canvas.getContext('2d');
    const colorPreview = document.getElementById('colorPreview');
    const redColorSlider = document.getElementById('redColorSlider');
    const greenColorSlider = document.getElementById('greenColorSlider');
    const blueColorSlider = document.getElementById('blueColorSlider');
    const strokeWidthSlider = document.getElementById('strokeWidthSlider');
    const eraserToggle = document.getElementById('eraserToggle');
    const canvasClear = document.getElementById('canvasClear');
    const artSave = document.getElementById('artSave');

    let drawing = false;
    let erasing = false;
    let currentColor = `rgb(${redColorSlider.value}, ${greenColorSlider.value}, ${blueColorSlider.value})`;
    let currentStrokeWidth = strokeWidthSlider.value;

    function updateColorPreview() {
        if (!erasing) {
            currentColor = `rgb(${redColorSlider.value}, ${greenColorSlider.value}, ${blueColorSlider.value})`;
            colorPreview.style.backgroundColor = currentColor; // Updates the color swatch
        }
    }

    function startDrawing(e) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }

    function draw(e) {
        if (!drawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = erasing ? '#FFFFFF' : currentColor;
        ctx.lineWidth = currentStrokeWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    function stopDrawing() {
        drawing = false;
        ctx.closePath();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function toggleEraser() {
        erasing = !erasing;
        eraserToggle.textContent = erasing ? 'Paint' : 'Eraser';
        if (erasing) {
            colorPreview.style.backgroundColor = '#FFFFFF';
        } else {
            updateColorPreview();
        }
    }

    function saveArt() {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'painting.png';
        link.href = dataURL;
        link.click();
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    redColorSlider.addEventListener('input', updateColorPreview);
    greenColorSlider.addEventListener('input', updateColorPreview);
    blueColorSlider.addEventListener('input', updateColorPreview);

    strokeWidthSlider.addEventListener('input', function() {
        currentStrokeWidth = this.value;
    });

    eraserToggle.addEventListener('click', toggleEraser);
    canvasClear.addEventListener('click', clearCanvas);
    artSave.addEventListener('click', saveArt);

    updateColorPreview();
});
