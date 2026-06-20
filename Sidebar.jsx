import { FaChartBar, FaUsers, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        SaaS Dashboard
      </h1>

      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <FaChartBar />
          Dashboard
        </li>

        <li className="flex items-center gap-3">
          <FaUsers />
          Users
        </li>

        <li className="flex items-center gap-3">
          <FaCog />
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;