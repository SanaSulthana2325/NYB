function Student() {

  const students = [
    "Sana",
    "Rahul",
    "Priya",
    "Ali"
  ];

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Student List
      </h1>

      <div className="grid grid-cols-2 gap-6">

        {students.map((student, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >

            <h2 className="text-2xl font-bold">
              {student}
            </h2>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Student;