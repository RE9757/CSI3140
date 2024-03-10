/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

function createCanvas() {
    var side = 100;
    var tableBody = document.getElementById('tablebody');
    for (var i = 0; i < side; ++i) {
        var row = document.createElement("tr");

        for (var j = 0; j < side; ++j) {

            var cell = document.createElement("td");
            row.appendChild(cell);
  
        }
        tableBody.appendChild(row);
    }
    document.getElementById("canvas").addEventListener(
        "mousemove", processMouseMove, false);
}

function processMouseMove(e){
    if(e.target.tagName.toLowerCase() == "td"){
        if(e.ctrlKey){
            e.target.setAttribute("class","blue");
        }

        if(e.shiftKey){
            e.target.setAttribute("class","red");
        }

        if(e.altKey){
            e.target.setAttribute("class","white");
        }
    }
}

function eraseAll(){
    var cells = document.querySelectorAll("td");
    for(var i = 0; i< cells.length; i++){
        cells[i].removeAttribute("class")
    }
}

window.addEventListener("load", createCanvas, false);