function ErrorMessage({ message }) {
  return (
    <div className="bg-red-200 text-red-700 p-4 rounded">
      {message}
    </div>
  );
}

export default ErrorMessage;