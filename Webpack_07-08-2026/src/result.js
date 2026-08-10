// result.js

export function calculateResult(marks) {

    const total = marks.maths + marks.science + marks.english;

    const average = total / 3;

    const status = average >= 35 ? "Pass" : "Fail";

    return {
        total,
        average,
        status
    };
}