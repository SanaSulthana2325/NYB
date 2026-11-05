
// STEP 1: Student Details

let students = [
    { id: 1, name: "Sana", marks: 85 },
    { id: 2, name: "Priya", marks: 90 },
    { id: 3, name: "Rahul", marks: 35 },
    { id: 4, name: "Sneha", marks: 95 },
    { id: 5, name: "Kiran", marks: 25 }
];


// STEP 2: Display Student Results

function showResults() {

    // Calculate total using REDUCE

    let totalMarks = students.reduce((sum, student) => {
        return sum + student.marks;
    }, 0);

    // Calculate average

    let average = totalMarks / students.length;


    // Assign grades using MAP

    let results = students.map(student => {

        let grade;

        if (student.marks >= 90) {
            grade = "A+";
        }
        else if (student.marks >= 80) {
            grade = "A";
        }
        else if (student.marks >= 60) {
            grade = "B";
        }
        else if (student.marks >= 35) {
            grade = "C";
        }
        else {
            grade = "Fail";
        }

        return {
            ...student,
            grade: grade
        };

    });


    // Display all students

    let output = "";

    results.forEach(student => {

        output += `
            <p>
                ID: ${student.id} |
                Name: ${student.name} |
                Marks: ${student.marks} |
                Grade: ${student.grade}
            </p>
        `;

    });

    document.getElementById("results").innerHTML = output;


    // STEP 3: Filter Passed Students

    let passed = students.filter(student => student.marks >= 35);


    // STEP 4: Filter Failed Students

    let failed = students.filter(student => student.marks < 35);


    // STEP 5: Find Topper

    let topper = students.reduce((top, student) => {
        return student.marks > top.marks ? student : top;
    });


    // STEP 6: Display Summary Report

    document.getElementById("summary").innerHTML = `
        <p>Total Students: ${students.length}</p>

        <p>Passed Students: ${passed.length}</p>

        <p>Failed Students: ${failed.length}</p>

        <p>Total Marks: ${totalMarks}</p>

        <p>Class Average: ${average}</p>

        <p>Topper: ${topper.name}</p>

        <p>Highest Marks: ${topper.marks}</p>
    `;

}
