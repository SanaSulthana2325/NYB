import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  course: "",
  age: "",
};

export default function StudentForm({
  selectedStudent,
  onSave,
  onCancel,
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedStudent) {
      setForm({
        name: selectedStudent.name,
        email: selectedStudent.email,
        course: selectedStudent.course,
        age: String(selectedStudent.age),
      });
    } else {
      setForm(emptyForm);
    }

    setErrors({});
  }, [selectedStudent]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.course.trim()) {
      newErrors.course = "Please select a course";
    }

    if (
      !form.age ||
      Number(form.age) < 1 ||
      Number(form.age) > 100
    ) {
      newErrors.age = "Enter an age between 1 and 100";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      course: form.course.trim(),
      age: Number(form.age),
    });

    setForm(emptyForm);
    setErrors({});
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">
        {selectedStudent ? "Edit Student" : "Add Student"}
      </h2>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Full Name
        </label>
        <input
          className={inputClass}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter student name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          className={inputClass}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="student@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Course
        </label>
        <select
          className={inputClass}
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">Select a course</option>
          <option value="React JS">React JS</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Web Development">Web Development</option>
        </select>
        {errors.course && (
          <p className="mt-1 text-sm text-red-600">
            {errors.course}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Age
        </label>
        <input
          className={inputClass}
          name="age"
          type="number"
          min="1"
          max="100"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter age"
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-600">
            {errors.age}
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-700"
        >
          {selectedStudent ? "Update Student" : "Add Student"}
        </button>

        {selectedStudent && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-300 px-5 py-2.5"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}