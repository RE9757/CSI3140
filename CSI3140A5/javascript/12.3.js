/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

window.onload = function() {
    highlightLinks('yellow'); 
};

function highlightLinks(color) {
    var links = document.querySelectorAll('a'); 
    for (var i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = color; 
    }
}
