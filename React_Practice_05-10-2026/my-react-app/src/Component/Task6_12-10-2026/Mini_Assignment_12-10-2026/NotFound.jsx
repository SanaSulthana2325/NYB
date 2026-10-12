
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="mb-3 text-5xl font-bold text-red-600">404</h1>
      <p className="mb-5 text-xl">Page Not Found</p>

      <Link
        to="/dashboard"
        className="rounded bg-indigo-600 px-4 py-2 text-white"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
