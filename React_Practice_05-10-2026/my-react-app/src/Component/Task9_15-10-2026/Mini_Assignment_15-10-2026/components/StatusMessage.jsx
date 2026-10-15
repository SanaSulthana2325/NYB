
export default function StatusMessage({
  loading,
  error,
  onRetry,
}) {
  if (loading) {
    return (
      <p className="rounded-lg bg-blue-50 p-4 text-blue-700">
        Loading employees...
      </p>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="space-y-3 rounded-lg bg-red-50 p-4 text-red-700"
      >
        <p>{error}</p>
        <button
          onClick={onRetry}
          className="font-semibold underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return null;
}
