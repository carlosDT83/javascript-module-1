function isValidLength(length) {
    return length >= 5 length <= 10;
}

function isFirstLetterCapitalize(username) {
    const firstLetter = username.charAt(0);
    return username === firstLetter.toUpperCase()
}

function userChecker (userName, userType) {
    const userLength = userName.length;
    const isASuperUser = userType === "admin" || userType === "manager"

    if (isASuperUser || (isFirstLetterCapitalize(username) && isValidLength(userLength))) {
        return "Username valid"
        }else {
        return "Username invalid"
    }
}

console.log(userChecker());