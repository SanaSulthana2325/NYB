function Deparment() {
  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      teachers: [
        { id: 101, name: 'Mr. Kumar' },
        { id: 102, name: 'Ms. Priya' }
      ]
    },
    {
      id: 2,
      name: 'Mechanical',
      teachers: [
        { id: 201, name: 'Mr. Rao' },
        { id: 202, name: 'Ms. Devi' }
      ]
    }
  ];

  return (
    <div>
      <h2>Departments</h2>

      {departments.map((dept) => (
        <div key={dept.id}>
          <h3>{dept.name}</h3>

          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {dept.teachers.map((teacher) => (
              <li key={teacher.id}>{teacher.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Deparment;