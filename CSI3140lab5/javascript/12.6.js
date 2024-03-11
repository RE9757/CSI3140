/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

document.addEventListener("DOMContentLoaded", function() {
    const backgroundSelect = document.getElementById('backgroundColorSelect');
    const fontStyleRadios = document.getElementsByName('fontStyleChoice');
    
    backgroundSelect.addEventListener('change', function() {
        document.body.style.backgroundColor = this.value;
    });

    Array.prototype.forEach.call(fontStyleRadios, function(radio) {
        radio.addEventListener('change', function() {
            if (this.checked) {
                document.body.style.fontFamily = this.value ;
            }
        });
    });
});
