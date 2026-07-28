import EmployeeCard from "../Employee_Dashboard_28-07-2026/EmployeeCard";
import withStatus from "../Employee_Dashboard_28-07-2026/withStatus";
import useAttendance from "../Employee_Dashboard_28-07-2026/useAttendance";

const Employee = withStatus(EmployeeCard);

function Employee_App() {

  const {

    daysPresent,
    markPresent,
    resetAttendance,

  } = useAttendance();

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="w-[500px] bg-gray-50 rounded-xl shadow-xl p-8 space-y-6">

        <h1 className="text-4xl font-bold text-center text-blue-700">

          Employee Dashboard

        </h1>

        <Employee

          name="Sana Sulthana"

          department="Frontend Development"

        />

        <div className="bg-white rounded-xl p-6 shadow">

          <h2 className="text-2xl font-bold">

            Attendance

          </h2>

          <p className="text-4xl text-green-600 my-4">

            {daysPresent} Days

          </p>

          <div className="flex gap-4">

            <button

              onClick={markPresent}

              className="bg-green-500 text-white px-4 py-2 rounded"

            >
              Mark Present
            </button>

            <button

              onClick={resetAttendance}

              className="bg-red-500 text-white px-4 py-2 rounded"

            >
              Reset
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Employee_App;