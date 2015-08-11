/* 
 * @author: MrRafalSzymanski
 */

module.exports = logger;
var slice = Array.prototype.slice;

function logger(namespace) {    
    return function(){
        var logString = namespace + " " + slice.call(arguments).join(" ");
        console.log(logString);
    };
}



