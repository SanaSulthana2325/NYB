import { useState } from "react";

function useAttendance() {
  const [daysPresent, setDaysPresent] = useState(20);

  const markPresent = () => {
    setDaysPresent(daysPresent + 1);
  };

  const resetAttendance = () => {
    setDaysPresent(0);
  };

  return {
    daysPresent,
    markPresent,
    resetAttendance,
  };
}

export default useAttendance;