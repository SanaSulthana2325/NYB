import { useMemo, useState } from "react";

function Sorting() {
  const [refresh, setRefresh] = useState(false);

  const numbers = [50, 20, 80, 10, 40];

  const sortedNumbers = useMemo(() => {
    console.log("Sorting numbers...");

    return [...numbers].sort((a, b) => a - b);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded"
        onClick={() => setRefresh(!refresh)}
      >
        Refresh
      </button>

      <p className="text-lg">{sortedNumbers.join(", ")}</p>
    </div>
  );
}

export default Sorting;