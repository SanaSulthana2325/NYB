
// ========================================
// STUDENT RESULT ANALYZER
// ========================================


// ----------------------------------------
// 1. FUNCTION DECLARATION
// Calculate Grade
// ----------------------------------------

function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    }
    else if (percentage >= 80) {
        return "A";
    }
    else if (percentage >= 70) {
        return "B";
    }
    else if (percentage >= 60) {
        return "C";
    }
    else if (percentage >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}


// ----------------------------------------
// 2. FUNCTION EXPRESSION
// Calculate Percentage
// ----------------------------------------

const calculatePercentage = function(total) {

    return (total / 300) * 100;

};


// ----------------------------------------
// 3. ARROW FUNCTION
// Calculate Total
// ----------------------------------------

const calculateTotal = (marks) => {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
};


// ----------------------------------------
// 4. FUNCTION WITH CALLBACK
// Display Result
// ----------------------------------------

function displayResult(name, total, percentage, grade, callback) {

    console.log("Displaying result...");

    callback(name, total, percentage, grade);
}


// ----------------------------------------
// 5. CALLBACK FUNCTION
// ----------------------------------------

function showResult(name, total, percentage, grade) {

    let resultMessage;

    // TERNARY OPERATOR
    let status = percentage >= 50 ? "PASS" : "FAIL";


    // SWITCH STATEMENT

    switch (grade) {

        case "A+":
            resultMessage = "Outstanding Performance!";
            break;

        case "A":
            resultMessage = "Excellent Performance!";
            break;

        case "B":
            resultMessage = "Very Good Performance!";
            break;

        case "C":
            resultMessage = "Good Performance!";
            break;

        case "D":
            resultMessage = "Needs Improvement!";
            break;

        default:
            resultMessage = "Work harder next time!";
    }


    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Total Marks:</strong> ${total} / 300</p>

        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>

        <p><strong>Grade:</strong> ${grade}</p>

        <p><strong>Status:</strong> ${status}</p>

        <p><strong>Performance:</strong> ${resultMessage}</p>
    `;
}


// ----------------------------------------
// 6. MAIN FUNCTION
// ----------------------------------------

function generateResult() {

    // Get values from HTML

    let name = document.getElementById("studentName").value;

    let maths = Number(
        document.getElementById("maths").value
    );

    let science = Number(
        document.getElementById("science").value
    );

    let english = Number(
        document.getElementById("english").value
    );


    // ------------------------------------
    // CONDITIONAL STATEMENT
    // Validate student name
    // ------------------------------------

    if (name === "") {

        alert("Please enter student name");
        return;
    }


    // ------------------------------------
    // CONDITIONAL STATEMENT
    // Validate marks
    // ------------------------------------

    if (
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        english < 0 || english > 100
    ) {

        alert("Marks must be between 0 and 100");
        return;
    }


    // ------------------------------------
    // ARRAY
    // ------------------------------------

    let marks = [
        maths,
        science,
        english
    ];


    // ------------------------------------
    // LOOP
    // Display marks in console
    // ------------------------------------

    console.log("Student:", name);

    console.log("Subject Marks:");

    for (let i = 0; i < marks.length; i++) {

        console.log(
            "Subject " + (i + 1) + ": " + marks[i]
        );
    }


    // ------------------------------------
    // CALCULATE TOTAL
    // Arrow Function
    // ------------------------------------

    let total = calculateTotal(marks);


    // ------------------------------------
    // CALCULATE PERCENTAGE
    // Function Expression
    // ------------------------------------

    let percentage = calculatePercentage(total);


    // ------------------------------------
    // CALCULATE GRADE
    // Function Declaration
    // ------------------------------------

    let grade = calculateGrade(percentage);


    // ------------------------------------
    // CALLBACK FUNCTION
    // ------------------------------------

    displayResult(
        name,
        total,
        percentage,
        grade,
        showResult
    );
}

