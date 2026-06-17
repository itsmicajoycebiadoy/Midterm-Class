// 1. if the length of the input is greater than or equal to 8, return true
// 2. if the length of the input is less than 8, return false
// 3. if no input, return false
// 4. if the input contains uppercase letters, return true
// 5. if the input does not have uppercase letters, return false

export function isValidatePassword(password) {
    if (password.length >= 8 && /[A-Z]/.test(password)) {
        return true;
    }
    return false;
}

export function gradeCalculator(prelim, midterm, finals, lab) {
    const grade = prelim + midterm + finals + lab;
    if (prelim === undefined || midterm === undefined || finals === undefined || lab === undefined) {
        return "INC";
    }
    else if (grade >= 98 && grade <= 100) {  
        return "1.00";
    }
    else if (grade >= 94 && grade <= 97) {
        return "1.25";
    }
    else if (grade >= 90 && grade <= 93) {
        return "1.50";
    }
    else if (grade >= 88 && grade <= 89) {
        return "1.75";
    }
    else if (grade >= 85 && grade <= 87) {
        return "2.00";
    }
    else if (grade >= 83 && grade <= 84) {
        return "2.25";
    }
    else if (grade >= 80 && grade <= 82) {
        return "2.50";
    }
    else if (grade >= 78 && grade <= 79) {
        return "2.75";
    }
    else if (grade >= 75 && grade <= 77) {
        return "3.00";
    }
    else if (grade < 75) {
        return "5.00";
    }
    else {
        return "invalid input";
    }
}

export function login(email, password) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const correctEmail = "juandelacruz@email.com";
    const correctPass = "Str0ngp@ssword";

    if (email === null || email === undefined || !emailPattern.test(email)) {
        throw new Error("Invalid email");
    }

    if (password === null || password === undefined || !passPattern.test(password)) {
        throw new Error("Weak Password");
    }

    if (email !== correctEmail || password !== correctPass) return "Incorrect email or password";

    return "Login Successful";
}

