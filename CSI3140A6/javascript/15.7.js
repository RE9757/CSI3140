/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

function loadXML(filePath) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            displayXML(this.responseXML);
        }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
}

function displayXML(xml) {
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xml);
    document.getElementById("xmlContent").innerHTML = xmlString;
}

loadXML("../xml/15.7.xml");