// =================================
// STUDENT DATA
// =================================

const students = [
    {
        name: "Sana",
        marks: 85
    },

    {
        name: "Ali",
        marks: 65
    },

    {
        name: "Ayesha",
        marks: 92
    },

    {
        name: "John",
        marks: 35
    }
];


// =================================
// PURE FUNCTION
// =================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 75) {
        return "A";
    }

    if (marks >= 60) {
        return "B";
    }

    if (marks >= 40) {
        return "C";
    }

    return "Fail";
}


// =================================
// FIRST-CLASS FUNCTION
// =================================

const calculatePercentage = function(marks) {

    return marks;

};


// =================================
// CALLBACK
// + HIGHER-ORDER FUNCTION
// =================================

function processStudent(marks, callback) {

    return callback(marks);

}


// =================================
// CLOSURE
// =================================

function createPassChecker(passMark) {

    return function(marks) {

        return marks >= passMark;

    };
}

const checkPass =
    createPassChecker(40);


// =================================
// CLOSURE - BONUS
// =================================

function createBonusCalculator(bonus) {

    return function(marks) {

        return marks + bonus;

    };
}

const addFiveMarks =
    createBonusCalculator(5);


// =================================
// IIFE
// =================================

const school = (function() {

    const schoolName = "Woods High School";

    return schoolName;

})();


// =================================
// IMPURE FUNCTION
// =================================

let studentCount = 0;

function countStudent() {

    studentCount++;

    return studentCount;

}


// =================================
// FUNCTION COMPOSITION
// =================================

function addBonus(marks) {

    return marks + 5;

}

function getFinalGrade(marks) {

    return getGrade(marks);

}


// =================================
// SHOW STUDENTS
// =================================

function showStudents() {

    const output =
        document.getElementById("output");

    output.innerHTML = "";

    students.forEach(function(student) {

        output.innerHTML += `
            <p>
                <strong>${student.name}</strong>
                - Marks: ${student.marks}
            </p>
        `;

    });
}


// =================================
// SHOW PASSED STUDENTS
// =================================

function showPassedStudents() {

    const output =
        document.getElementById("output");

    const passedStudents =
        students.filter(function(student) {

            return checkPass(student.marks);

        });

    output.innerHTML = "";

    passedStudents.forEach(function(student) {

        output.innerHTML += `
            <p>
                ${student.name}
                - ${student.marks}
            </p>
        `;

    });
}


// =================================
// SHOW RESULTS
// =================================

function showResults() {

    const output =
        document.getElementById("output");

    output.innerHTML = "";

    students.forEach(function(student) {

        const bonusMarks =
            addFiveMarks(student.marks);

        const grade =
            getGrade(bonusMarks);

        output.innerHTML += `
            <p>
                <strong>${student.name}</strong><br>

                Original Marks:
                ${student.marks}<br>

                After Bonus:
                ${bonusMarks}<br>

                Grade:
                ${grade}
            </p>

            <hr>
        `;

    });
}


// =================================
// CONSOLE TESTING
// =================================

console.log("PURE FUNCTION");

console.log(getGrade(85));
// A


console.log("FIRST-CLASS FUNCTION");

console.log(calculatePercentage(90));
// 90


console.log("CALLBACK");

console.log(
    processStudent(85, getGrade)
);
// A


console.log("CLOSURE");

console.log(checkPass(60));
// true


console.log("BONUS CLOSURE");

console.log(addFiveMarks(80));
// 85


console.log("IIFE");

console.log(school);
// ABC School


console.log("IMPURE FUNCTION");

console.log(countStudent());
// 1

console.log(countStudent());
// 2


console.log("FUNCTION COMPOSITION");

console.log(
    getFinalGrade(
        addBonus(70)
    )
);
