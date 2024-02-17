/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

const articles = ["the", "a", "one", "some", "any"];
const nouns = ["boy", "girl", "dog", "town", "car"];
const verbs = ["drove", "jumped", "ran", "walked", "skipped"];
const prepositions = ["to", "from", "over", "under", "on"];

function sentence() {
    const article = articles[Math.floor(Math.random() * articles.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const preposition = prepositions[Math.floor(Math.random() * prepositions.length)];
    const prepositionArticle = articles[Math.floor(Math.random() * articles.length)];
    const prepositionNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${article} ${noun} ${verb} ${preposition} ${prepositionArticle} ${prepositionNoun}`;
}

function generateStory() {
    let storyText = "Once upon a time...\n";
    for (let i = 0; i < 20; i++) {
        let newSentence = sentence();
        storyText += newSentence.charAt(0).toUpperCase() + newSentence.slice(1) + '. ';
    }
    storyText += "\nTHE END.";
    document.getElementById('story').textContent = storyText;
}


window.onload = generateStory;
