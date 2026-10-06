import { useState } from "react";

function Teacher() {

    const [feedback, setFeedback] = useState("No feedback yet");

    function receiveFeedback(message) {
        setFeedback(message);
    }

    return (
        <>
            <h1>Teacher</h1>

            <h2>Student Feedback: {feedback}</h2>

            <Student sendFeedback={receiveFeedback} />
        </>
    );
}


function Student(props) {

    return (
        <>
            <h2>Student</h2>

            <button onClick={() => props.sendFeedback("Class was very good")} className='bg-pink-800  px-2 py-2 mr-2'>
                Good
            </button>

            <button onClick={() => props.sendFeedback("Class was okay")} className='bg-green-300  px-2 py-2 mr-2'>
                Okay
            </button>

            <button onClick={() => props.sendFeedback("I need more explanation")} className='bg-yellow-800  px-2 py-2 mr-2'>
                Need Help
            </button>
        </>
    );
}



export {Teacher};