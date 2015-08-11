/* 
 * @author: MrRafalSzymanski
 */

module.exports = duckCount;

function duckCount() {
    var argsArray = Array.prototype.slice.call(arguments);
    
    return argsArray.reduce(function(count, element){
        return count + (Object.prototype.hasOwnProperty.call(element, "quack") ? 1 : 0);
    }, 0);
}



