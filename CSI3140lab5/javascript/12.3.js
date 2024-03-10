/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

window.onload = function() {
    highlightLinks('yellow'); // 举例用黄色作为背景高亮显示
};

function highlightLinks(color) {
    var links = document.querySelectorAll('a'); // 获取所有链接
    for (var i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = color; // 设置链接背景色
    }
}
