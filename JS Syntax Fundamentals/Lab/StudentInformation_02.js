function studentGrade(name, age, grade){
    grade = Number(grade).toFixed(2);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
}

studentGrade('Steve', 16, 2.1426);