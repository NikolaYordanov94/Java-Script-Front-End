function oddAndEvenSum(num) {

    console.log(`Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`)

    function oddSum(number) {
        let sum = 0;

        while (number > 0) {
            let currentNum = number % 10;

            if (currentNum % 2 != 0) {
                sum += currentNum;
            }
            number = Math.floor(number / 10);
        }
        return sum;
    }

    function evenSum(number) {
        let sum = 0;

        while (number > 0) {
            let currentNum = number % 10;

            if (currentNum % 2 == 0) {
                sum += currentNum;
            }
            number = Math.floor(number / 10);
        }
        return sum;
    }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);