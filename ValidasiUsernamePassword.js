//username
function isAcceptedUsername(username) {
    var Regex = /^[@]{1}[a-z0-9]{2,11}$/i ;
    return Regex.test(username) ;
}
if (isAcceptedUsername("@faka4000000")) {
    alert("Username Is Valid") ;
} else {
    alert("Username Is Invalid") ;
}


//password
function isAcceptedPassword(password) {
    var Regex = /^[0-9]{1}[0-9]{5,5}$/i ;
    return Regex.test(password) ;
}
if (isAcceptedPassword("123455")) {
    alert("Password Is Valid") ;
} else {
    alert("Password Is Invalid") ;
}
