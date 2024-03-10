/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

function start(){
    var inputColor = prompt("Enter a color name for the " + "background of this page", "");
    var inputFont = prompt("Enter a font name for the " + "font of body", "")
    document.body.setAttribute("style", "background-color: " + inputColor + "; font-family: "+ inputFont + ";");
}//end of function start

window.addEventListener("load", start, false);