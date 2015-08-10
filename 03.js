/* 
 * @author: MrRafalSzymanski
 */

module.exports = doubleAll

function doubleAll(numbers) {
    return numbers.map(function(curr,idx,array){
        return curr * 2;
    });
}