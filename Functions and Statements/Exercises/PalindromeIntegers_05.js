function palindromeIntegers(integersArr) {

    for (let index = 0; index < integersArr.length; index++) {
        console.log(checkIfPalindrome(integersArr[index]));
    }

    function checkIfPalindrome(num) {
        let numReverse = num.toString().split("").reverse().join("");

        if (numReverse === num.toString()) {
            return true;
        } else {
            return false;
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);