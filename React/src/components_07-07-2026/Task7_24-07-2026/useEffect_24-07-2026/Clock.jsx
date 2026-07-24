import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-green-500 text-white p-10 rounded-xl shadow-xl">
        <h1 className="text-5xl font-bold">
          {time.toLocaleTimeString()}
        </h1>
      </div>
    </div>
  );
}

export default Clock;