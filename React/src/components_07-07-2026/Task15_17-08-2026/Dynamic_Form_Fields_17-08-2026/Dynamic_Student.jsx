import React, { useState } from "react";

function Dynamic_Student() {
    const [students, setStudents] = useState([
        { name: "" }
    ]);

    // Add a new student
    const addStudent = () => {
        setStudents([
            ...students,
            { name: "" }
        ]);
    };

    // Remove a student
    const removeStudent = (index) => {
        const updatedStudents = students.filter(
            (_, i) => i !== index
        );

        setStudents(updatedStudents);
    };

    // Update student name
    const handleChange = (index, value) => {
        const updatedStudents = [...students];

        updatedStudents[index].name = value;

        setStudents(updatedStudents);
    };

    return (
        <div>
            <h2>Students Form</h2>

            {students.map((student, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Enter Student Name"
                        value={student.name}
                        onChange={(e) =>
                            handleChange(index, e.target.value)
                        }
                        className="border border-pink-700"
                    />

                    <button
                        onClick={() => removeStudent(index)}
                        className="bg-green-200"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                onClick={addStudent}
                className="bg-blue-200"
            >
                Add Student
            </button>
        </div>
    );
}

export default Dynamic_Student;