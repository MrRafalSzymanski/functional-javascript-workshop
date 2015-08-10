/* 
 * @author: MrRafalSzymanski
 */
    
module.exports = reduce;

function reduce(arr, fn, initial) {
    if (!arr.length)
        return;
    
    initial = fn(initial, arr[0], 0, arr);
    reduce(arr.slice(1), fn, initial);
    
    return initial;
}  