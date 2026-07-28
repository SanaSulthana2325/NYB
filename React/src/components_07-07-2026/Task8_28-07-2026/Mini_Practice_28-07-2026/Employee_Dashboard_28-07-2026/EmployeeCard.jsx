function EmployeeCard({ name, department }) {

  return (

    <>

      <h2 className="text-3xl font-bold text-blue-700">
        {name}
      </h2>

      <p className="text-gray-600 mt-2">
        Department : {department}
      </p>

    </>

  );

}

export default EmployeeCard;