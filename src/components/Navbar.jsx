import { Link } from "react-router-dom";

export default function Navbar({ title, showBack = false, showNew = false }) {
  return (
    <div className="flex justify-between items-center mb-6 bg-gray-800 text-gray-200 px-4 py-3 rounded-lg shadow">
      {/* Back Button */}
      {showBack ? (
        <Link
          to="/"
          className="bg-gray-700 text-gray-200 px-3 py-1 rounded hover:bg-gray-600 transition"
        >
          ← Back
        </Link>
      ) : (
        <span></span>
      )}

      {/* Title */}
      <h1 className="text-lg font-bold text-purple-400">Work Elite Team</h1>

      {/* New Chat Button */}
      {showNew ? (
        <Link
          to="/new"
          className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition"
        >
          + New Chat
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
}
