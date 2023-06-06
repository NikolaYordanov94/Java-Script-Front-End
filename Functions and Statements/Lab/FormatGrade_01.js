function formatGrade(grade) {
    let gradeText = "";

    if (grade < 3.00) {
        gradeText = "Fail";
    } else if (grade < 3.50) {
        gradeText = "Poor";
    } else if (grade < 4.50) {
        gradeText = "Good";
    } else if (grade < 5.50) {
        gradeText = "Very good";
    } else {
        gradeText = "Excellent";
    }

    if (gradeText === "Fail") {
        console.log(`${gradeText} (2)`);
    } else {
        console.log(`${gradeText} (${customFormat(grade, 2)})`);
    }

    function customFormat(grade, decimalFormat) {
        return grade.toFixed(decimalFormat);
    }
}

formatGrade(3.33);
formatGrade(4.50);