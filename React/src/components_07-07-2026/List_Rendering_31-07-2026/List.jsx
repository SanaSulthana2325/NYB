// What is List Rendering?

// List rendering is the process of rendering multiple similar elements from an array using the map() method




// Summary

// Concept                             Explanation

//List Rendering                    Displaying multiple elements from an array

//map()                             Loops through an array and returns JSX

// key                               Unique identifier for each rendered item

// Array of Strings                    Render simple text items

// Array of Objects                Render structured data like products or students

// Conditional Rendering               Show only selected items

// Component Rendering                Render React components for each item


// What is the key prop?

// When you render a list using map(), React requires each element to have a unique key.



// Why is key Important?

// Imagine a class of students.

// Without roll numbers, the teacher may not know which student is absent.

// With roll numbers, each student is uniquely identified.

// React works the same way.

// Key = Roll Number / ID

// React uses keys to know which item changed, was added, or was removed.


// Summary

// Concept                                         Explanation

// key prop                                    Unique identifier for list items

// Why needed?                                 Helps React track items between renders

// Without key                                React shows a warning and updates less efficiently

// Best key                                    Unique stable ID (e.g., student.id)

// Index as key                              Acceptable only for static lists that never change order

// Random values                                  Never use them as keys




// What is a Nested List?

// A nested list is an array that contains objects, and each object contains another array.

// For example, a class has students, and each student has subjects.