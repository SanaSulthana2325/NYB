import { useState } from "react";

function StudentForm() {

  const [form, setForm] = useState({

    name: "",

    email: "",

    course: ""

  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  }

  function validate() {

    let error = {};

    if (!form.name)

      error.name = "Name Required";

    if (!form.email)

      error.email = "Email Required";

    if (!form.course)

      error.course = "Course Required";

    setErrors(error);

    return Object.keys(error).length === 0;

  }

  function handleSubmit(e) {

    e.preventDefault();

    if (validate()) {

      alert("Student Added");

    }

  }

  return (

    <form

      onSubmit={handleSubmit}

      className="bg-white p-5 rounded shadow"

    >

      <input

        className="border p-2 w-full mb-3"

        placeholder="Name"

        name="name"

        onChange={handleChange}

      />

      {errors.name && (

        <p className="text-red-500">

          {errors.name}

        </p>

      )}

      <input

        className="border p-2 w-full mb-3"

        placeholder="Email"

        name="email"

        onChange={handleChange}

      />

      {errors.email && (

        <p className="text-red-500">

          {errors.email}

        </p>

      )}

      <input

        className="border p-2 w-full mb-3"

        placeholder="Course"

        name="course"

        onChange={handleChange}

      />

      {errors.course && (

        <p className="text-red-500">

          {errors.course}

        </p>

      )}

      <button

        className="bg-blue-600 text-white px-5 py-2 rounded"

      >

        Add Student

      </button>

    </form>

  );

}

export default StudentForm;