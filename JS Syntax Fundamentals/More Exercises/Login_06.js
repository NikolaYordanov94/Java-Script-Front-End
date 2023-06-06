function login(inputArr) {
    let username = inputArr[0];
    let correctPassword = inputArr[0].split("").reverse().join("");
    let counterWrongPasswords = 0;

    for (let index = 1; index < inputArr.length; index++) {
        let currentPassword = inputArr[index];

        if (currentPassword === correctPassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counterWrongPasswords === 3) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log("Incorrect password. Try again.");
                counterWrongPasswords++;
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);