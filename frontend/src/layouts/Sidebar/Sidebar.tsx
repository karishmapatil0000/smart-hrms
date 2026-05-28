import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-blue-600 text-white p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Smart Hrms</h1>
      </div>
      <nav className="flex flex-col gap-4">
        <Link
          to="dashboaed"
          className="px-4 py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Dashboard
        </Link>
        <Link
          to="employee"
          className="px-4 py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Employee
        </Link>
        <Link
          to="leave"
          className="px-4 py-4 rounded-xl hover:bg-blue-700 transition "
        >
          Leave
        </Link>
        <Link
          to="leave"
          className="px-4 py-4 rounded-xl hover:bg-blue-700 transition "
        >
          Recruitment
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
