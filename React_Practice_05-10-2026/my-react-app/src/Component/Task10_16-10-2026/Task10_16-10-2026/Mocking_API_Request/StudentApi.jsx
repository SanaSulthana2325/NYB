export async function getStudents(){
    const response = await fetch("/api/students");

    if(!response.ok){
        throw new error("failed to load students");
    }

    return response.json();
}



// Mocking API requests
// Mocking means replacing a real external dependency with a controlled test version.