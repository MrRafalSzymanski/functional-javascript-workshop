/* 
 * @author: MrRafalSzymanski
 * 
 */

module.exports = repeat;

function repeat(operation, num) {
    for (var idx = 0; idx < num; idx++){        
        operation();
    }
}



