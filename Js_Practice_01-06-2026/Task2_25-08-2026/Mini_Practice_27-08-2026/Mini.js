const student = {
  id: 101,
  name: "Sana",
  course: "JavaScript",
  marks: 90,
  address: {
    city: "Hyderabad"
  }
};

// Object.entries()
console.log(Object.entries(student));

// Spread
const updatedStudent = {
  ...student,
  marks: 95
};
console.log(updatedStudent);

// Object.assign()
const copyStudent = Object.assign({}, student);
console.log(copyStudent);

// Rest
const { name, ...details } = student;
console.log(name);
console.log(details);

// Optional Chaining
console.log(student?.address?.city);

// Nullish Coalescing
console.log(student.phone ?? "Phone Not Available");









// Topic                          Simple Memory 

// Object.entries()              Converts object into [key, value] pairs.


// Object.assign()                Copies or merges objects.

// Spread (...)                    Expands or copies properties.


// Rest (...)                      Collects remaining values/properties.

// Optional Chaining (?.)           Safely access nested properties.


// Nullish Coalescing (??)            Gives a default value only for null or undefined.