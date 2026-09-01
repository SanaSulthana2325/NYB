// ==========================================
// 1. CREATE A NESTED OBJECT
// ==========================================

let student = {
    id: 101,
    name: "Sana",
    age: 22,

    address: {
        city: "Warangal",
        state: "Telangana",
        country: "India"
    },

    contact: {
        email: "sana@gmail.com",
        phone: "9876543210"
    },

    education: {
        degree: "Bcom",
        college: "CDU College",

        marks: {
            maths: 85,
            EVS: 88,
            English: 92
        }
    },

    skills: ["Cooking", "Dancing", "listening song"]
};

console.log("Original Student:");
console.log(student);


// ==========================================
// 2. ACCESS NORMAL PROPERTY
// ==========================================

console.log(student.name);

console.log(student.age);


// ==========================================
// 3. ACCESS NESTED PROPERTY
// ==========================================

console.log(student.address.city);

console.log(student.address.state);

console.log(student.education.degree);

console.log(student.education.marks.maths);



// ==========================================
// 4. BRACKET NOTATION
// ==========================================

console.log(student["name"]);

console.log(student["address"]["city"]);

console.log(student["education"]["marks"]["English"]);




// ==========================================
// 5. UPDATE NORMAL PROPERTY
// ==========================================

student.age = 23;

console.log(student.age);



// ==========================================
// 6. UPDATE NESTED PROPERTY
// ==========================================

student.address.city = "Hyderabad";

console.log(student.address.city);



// ==========================================
// 7. UPDATE DEEPLY NESTED PROPERTY
// ==========================================

student.education.marks.English = 95;

console.log(student.education.marks.English);



// ==========================================
// 8. ADD A NEW PROPERTY
// ==========================================

student.address.pincode = 506001;

console.log(student.address);


// ==========================================
// 10. DELETE A PROPERTY
// ==========================================

delete student.contact.phone;

console.log(student.contact);


// ==========================================
// 11. ARRAY INSIDE OBJECT
// ==========================================

student.skills.push("Cooking");

console.log(student.skills);

// ==========================================
// 12. DESTRUCTURING
// ==========================================

const { name, age, address } = student;

console.log(name);
console.log(age);
console.log(address);


// ==========================================
// 13. NESTED DESTRUCTURING
// ==========================================

const { city, state } = student.address;

console.log(city);
console.log(state);

// ==========================================
// 14. DEEPLY NESTED DESTRUCTURING
// ==========================================

const {
    marks: { English }
} = student.education;

console.log(English);


// ==========================================
// 15. OPTIONAL CHAINING
// ==========================================

// pincode exists
console.log(student.address?.pincode);



// property does not exist
console.log(student.address?.street);



// ==========================================
// 16. NULLISH COALESCING
// ==========================================

const street = student.address?.street ?? "Street Not Available";

console.log(street);



// ==========================================
// 17. OBJECT.KEYS()
// ==========================================

const keys = Object.keys(student);

console.log(keys);



// ==========================================
// 18. OBJECT.VALUES()
// ==========================================

const values = Object.values(student);

console.log(values);


// ==========================================
// 19. OBJECT.ENTRIES()
// ==========================================

const entries = Object.entries(student);

console.log(entries);


// ==========================================
// 20. SPREAD OPERATOR
// ==========================================

const updatedStudent = {
    ...student,
    age: 24
};

console.log(updatedStudent);


// Original object is not directly changed
console.log(student.age);


// New object has updated age
console.log(updatedStudent.age);



// ==========================================
// 21. REST OPERATOR
// ==========================================

const { id, ...studentWithoutId } = student;

console.log(studentWithoutId);


// ==========================================
// 22. FINAL OBJECT
// ==========================================

console.log("Final Student Object:");

console.log(student);