/* 
 * @author: MrRafalSzymanski
 */

module.exports = countWords;

function countWords(inputWords) {
    return inputWords.reduce(function(wordMap, word) {
       wordMap[word] = ++wordMap[word] || 1;
       return wordMap;
    }, {});
}
    


