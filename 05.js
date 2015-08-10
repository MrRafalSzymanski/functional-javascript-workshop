/* 
 * @author: MrRafalSzymanski
 */

module.exports = checkUsersValid;

function checkUsersValid(goodUsers) {
    
    var goodIDs = goodUsers.map(function(element){
        return element.id;
    });
    
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(element){
            return (goodIDs.indexOf(element.id) >= 0);
        });
    };
}
    

