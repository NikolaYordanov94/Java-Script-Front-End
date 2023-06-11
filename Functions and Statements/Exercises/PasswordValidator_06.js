function passwordValidator(passwod) {

    if (validLenght(passwod) && validStructure(passwod) && hasAtLeastTwoDigits(passwod)) {
        console.log("Password is valid");
    } else {
        if (!validLenght(passwod)) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (!validStructure(passwod)) {
            console.log("Password must consist only of letters and digits");
        }

        if (!hasAtLeastTwoDigits(passwod)) {
            console.log("Password must have at least 2 digits");
        }
    }

    function validLenght(passwod) {
        if (passwod.length >= 6 && passwod.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function validStructure(passwod) {
        return /^[a-z0-9]+$/i.test(passwod);
    }

    function hasAtLeastTwoDigits(passwod) {
        let counterOfDigits = 0;

        for (let charIndex = 0; charIndex < passwod.length; charIndex++) {
            let currentChar = passwod.charAt(charIndex);

            if (currentChar.charCodeAt(0) >= 48 && currentChar.charCodeAt(0) <= 57) {
                counterOfDigits++;
            }
        }
        if (counterOfDigits >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

passwordValidator('MyPass123');
passwordValidator('logIn');