/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */



let DraggableImg = document.getElementById("DraggableImg");
let DraggableContainer = document.getElementById("DraggableContainer");
let offsetX, offsetY, mouseDown = false;

DraggableImg.addEventListener("mousedown", function(e) {
    mouseDown = true;
    DraggableImg.style.position = 'absolute';

    offsetX = e.clientX - DraggableImg.getBoundingClientRect().left;
    offsetY = e.clientY - DraggableImg.getBoundingClientRect().top;

    e.preventDefault(); // Prevent default drag behavior
});

DraggableContainer.addEventListener("mousemove", function(e) {
    if (mouseDown) {
        DraggableImg.style.left = e.clientX - offsetX + "px";
        DraggableImg.style.top = e.clientY - offsetY + "px";
    }
});

DraggableImg.addEventListener("mouseup", function() {
    mouseDown = false;
});

document.addEventListener("mouseup", function() {
    if (mouseDown) {
        mouseDown = false;
    }
});

DraggableContainer.addEventListener("mouseleave", function() {
    mouseDown = false;
});
