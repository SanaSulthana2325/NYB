import { useEffect, useState } from "react";

import StudentCard from "../components/StudentCard";

import StudentForm from "../components/StudentForm";

import ErrorMessage from "../components/ErrorMessage";

import { getStudents } from "../service/API";

import withLoading from "../hoc/withLoading";

function Dashboard() {

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    getStudents()

      .then((res) => {

        setStudents(res.data);

        setLoading(false);

      })

      .catch(() => {

        setError("Unable to Fetch Data");

        setLoading(false);

      });

  }, []);

  if (error)

    return <ErrorMessage message={error} />;

  return (

    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">

        Student Dashboard

      </h1>

      <StudentForm />

      <div className="grid md:grid-cols-3 gap-5 mt-10">

        {students.map((student) => (

          <StudentCard

            key={student.id}

            student={student}

          />

        ))}

      </div>

    </div>

  );

}

export default withLoading(Dashboard);