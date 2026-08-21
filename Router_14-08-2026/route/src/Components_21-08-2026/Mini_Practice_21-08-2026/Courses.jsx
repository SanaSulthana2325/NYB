function Course({ name, duration, level }) {
  return (
    <div className="student-card">

      <h2>{name}</h2>

      <p>Duration: {duration}</p>

      <p>Level: {level}</p>

    </div>
  );
}

function Courses() {

  return (
    <div>

      <h1>Courses</h1>

      <Course
        name="Human Resourse"
        duration="3 Months"
        level="Beginner"
      />

      <Course
        name="Marketing"
        duration="2 Months"
        level="Intermediate"
      />

      <Course
        name="Finance"
        duration="4 Months"
        level="Beginner"
      />

    </div>
  );
}

export default Courses;