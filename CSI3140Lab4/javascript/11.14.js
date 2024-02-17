/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */


document.getElementById('countButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value.toLowerCase();
    const frequency = {};

    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    const sortedKeys = Object.keys(frequency).sort();
    let result = 'Letter\tFrequency\n';
    for (let key of sortedKeys) {
        result += key.toUpperCase() + '\t' + frequency[key] + '\n';
    }

    document.getElementById('resultOutput').value = result;
});
