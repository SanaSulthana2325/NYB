function Results() {
  const marks = 80;

  return (
    <div className="flex justify-center mt-20">
      {marks >= 35 ? (
        <h1 className="text-green-600 text-4xl font-bold">
          Pass
        </h1>
      ) : (
        <h1 className="text-red-600 text-4xl font-bold">
          Fail
        </h1>
      )}
    </div>
  );
}

export default Results;