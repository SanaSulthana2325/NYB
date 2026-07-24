function StudentCard({ student }) {
  return (
    <div className="bg-white p-5 rounded shadow">

      <h2 className="font-bold text-xl">

        {student.name}

      </h2>

      <p>{student.email}</p>

      <p>{student.website}</p>

    </div>
  );
}

export default StudentCard;