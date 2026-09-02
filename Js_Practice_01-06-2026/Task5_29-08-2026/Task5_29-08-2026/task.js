
console.log("===== STUDENT MANAGEMENT SYSTEM =====");


// =====================================================
// 1. OBJECT
// =====================================================

let student = {
    id: 101,
    name: "Sana",
    age: 22,
    marks: [80, 90, 85],

    contact: {
        email: "sana@gmail.com",
        phone: "9876543210"
    }
};

console.log("\n1. STUDENT OBJECT");
console.log(student);


// Access object properties

console.log("Name:", student.name);
console.log("Age:", student.age);


// Add a new property

student.city = "Warangal";

console.log("City:", student.city);


// Update property

student.age = 23;

console.log("Updated Age:", student.age);


// =====================================================
// 2. FUNCTION
// =====================================================

console.log("\n2. FUNCTION");


function calculateTotal(marks) {

    return marks[0] + marks[1] + marks[2];

}


let total = calculateTotal(student.marks);

console.log("Total Marks:", total);


// Arrow Function

const calculateAverage = (total, subjects) => {

    return total / subjects;

};


let average = calculateAverage(total, 3);

console.log("Average:", average);


// =====================================================
// 3. TEMPLATE LITERAL
// =====================================================

console.log("\n3. TEMPLATE LITERAL");


console.log(
    `My name is ${student.name} and my average is ${average}.`
);


// =====================================================
// 4. DESTRUCTURING
// =====================================================

console.log("\n4. DESTRUCTURING");


// Object Destructuring

const {
    id,
    name,
    age
} = student;


console.log("ID:", id);
console.log("Name:", name);
console.log("Age:", age);


// Array Destructuring

const [mark1, mark2, mark3] = student.marks;

console.log("Mark 1:", mark1);
console.log("Mark 2:", mark2);
console.log("Mark 3:", mark3);


// =====================================================
// 5. SPREAD OPERATOR
// =====================================================

console.log("\n5. SPREAD OPERATOR");


let newStudent = {

    ...student,

    course: "JavaScript"

};


console.log(newStudent);


// Array Spread

let oldMarks = [80, 90];

let newMarks = [...oldMarks, 85];

console.log("New Marks:", newMarks);


// =====================================================
// 6. REST OPERATOR
// =====================================================

console.log("\n6. REST OPERATOR");


function addNumbers(...numbers) {

    let sum = 0;

    for (let number of numbers) {

        sum += number;

    }

    return sum;
}


console.log(
    "Sum:",
    addNumbers(10, 20, 30)
);


// =====================================================
// 7. OPTIONAL CHAINING
// =====================================================

console.log("\n7. OPTIONAL CHAINING");


console.log(
    "Email:",
    student.contact?.email
);


console.log(
    "Phone:",
    student.contact?.phone
);


// Address does not exist

console.log(
    "City:",
    student.address?.city
);


// No error occurs.
// It simply returns undefined.


// =====================================================
// 8. NULLISH COALESCING
// =====================================================

console.log("\n8. NULLISH COALESCING");


let phone =
    student.contact?.phone ?? "Phone not available";


let country =
    student.contact?.country ?? "Country not available";


console.log("Phone:", phone);
console.log("Country:", country);


// =====================================================
// 9. ARRAY + HIGHER ORDER FUNCTIONS
// =====================================================

console.log("\n9. HIGHER ORDER FUNCTIONS");


let students = [

    {
        name: "Sana",
        marks: 90
    },

    {
        name: "Rahul",
        marks: 75
    },

    {
        name: "Ayesha",
        marks: 95
    },

    {
        name: "Arjun",
        marks: 60
    }

];


// forEach()

console.log("All Students:");

students.forEach(student => {

    console.log(student.name);

});


// map()

let names = students.map(student => {

    return student.name;

});

console.log("Student Names:", names);


// filter()

let topStudents = students.filter(student => {

    return student.marks >= 80;

});

console.log(
    "Students with 80+ marks:",
    topStudents
);


// find()

let foundStudent = students.find(student => {

    return student.name === "Rahul";

});

console.log(
    "Found Student:",
    foundStudent
);


// =====================================================
// 10. MAP
// =====================================================

console.log("\n10. MAP");


let studentMap = new Map();

studentMap.set(101, "Sana");
studentMap.set(102, "Rahul");
studentMap.set(103, "Ayesha");


console.log("Student with ID 101:");

console.log(
    studentMap.get(101)
);


console.log(
    "Does ID 102 exist?",
    studentMap.has(102)
);


console.log(
    "Total Students:",
    studentMap.size
);


// =====================================================
// 11. SET
// =====================================================

console.log("\n11. SET");


let subjects = new Set([

    "JavaScript",
    "HTML",
    "CSS",
    "JavaScript",
    "HTML"

]);


console.log(
    "Unique Subjects:",
    subjects
);


console.log(
    "Number of Subjects:",
    subjects.size
);


// =====================================================
// 12. WEAKMAP
// =====================================================

console.log("\n12. WEAKMAP");


let privateData = new WeakMap();


let studentObject = {
    name: "Sana"
};


privateData.set(
    studentObject,
    {
        password: "12345"
    }
);


console.log(
    "Private Data:",
    privateData.get(studentObject)
);


// =====================================================
// 13. WEAKSET
// =====================================================

console.log("\n13. WEAKSET");


let activeStudents = new WeakSet();


activeStudents.add(studentObject);


console.log(
    "Is Sana active?",
    activeStudents.has(studentObject)
);


// =====================================================
// 14. CLASS
// =====================================================

console.log("\n14. CLASS");


class Student {

    constructor(name, marks) {

        this.name = name;

        this.marks = marks;

    }


    showDetails() {

        console.log(
            `Student: ${this.name}, Marks: ${this.marks}`
        );

    }

}


let student1 = new Student(
    "John",
    85
);


student1.showDetails();


// =====================================================
// 15. INHERITANCE
// =====================================================

console.log("\n15. INHERITANCE");


class TopStudent extends Student {

    showAward() {

        console.log(
            `${this.name} received the Best Student Award!`
        );

    }

}


let student2 = new TopStudent(
    "Ayesha",
    95
);


student2.showDetails();

student2.showAward();


// =====================================================
// 16. PROMISE
// =====================================================

console.log("\n16. PROMISE");


function getStudentData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(
                "Student data received!"
            );

        }, 2000);

    });

}


getStudentData()
    .then(message => {

        console.log(message);

    });


// =====================================================
// 17. ASYNC / AWAIT
// =====================================================

console.log("\n17. ASYNC / AWAIT");


async function showStudentData() {

    console.log(
        "Getting student data..."
    );


    let result = await getStudentData();


    console.log(result);

}


showStudentData();


// =====================================================
// 18. EVENT LOOP
// =====================================================

console.log("\n18. EVENT LOOP");


console.log("1. Start");


setTimeout(() => {

    console.log("3. setTimeout");

}, 0);


Promise.resolve().then(() => {

    console.log("2. Promise");

});


console.log("4. End");


// =====================================================
// FINAL
// =====================================================

console.log("===== PROJECT COMPLETED =====");