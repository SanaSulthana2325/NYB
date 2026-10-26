
const form = document.getElementById("studentForm");
const resultTable = document.getElementById("resultTable");

const students = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get student details
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();

  // Get marks
  const marks = [
    Number(document.getElementById("english").value),
    Number(document.getElementById("maths").value),
    Number(document.getElementById("science").value),
    Number(document.getElementById("social").value),
    Number(document.getElementById("computer").value)
  ];

  // Validate marks
  if (
    marks.some(mark => !Number.isFinite(mark) ||
      mark < 0 || mark > 100) ||
    marks.some(mark => document.querySelector("input") === null)
  ) {
    alert("Please enter valid marks between 0 and 100.");
    return;
  }

  // Calculate total and percentage
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / marks.length;

  // Calculate grade
  let grade;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Calculate pass or fail
  const status = marks.every(mark => mark >= 35)
    ? "PASS"
    : "FAIL";

  // Create student object
  const student = {
    name,
    roll,
    marks,
    total,
    percentage,
    grade,
    status
  };

  students.push(student);

  // Add result to the table
  const row = document.createElement("tr");

  [
    student.name,
    student.roll,
    `${student.total}/500`,
    `${student.percentage.toFixed(2)}%`,
    student.grade,
    student.status
  ].forEach((value, index) => {
    const cell = document.createElement("td");
    cell.textContent = value;

    if (index === 5) {
      cell.className = student.status === "PASS" ? "pass" : "fail";
    }

    row.appendChild(cell);
  });

  resultTable.appendChild(row);

  // Reset the form for the next student
  form.reset();
});
