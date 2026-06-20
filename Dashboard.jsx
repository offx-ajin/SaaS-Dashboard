import Transactions from "./Transactions";
import RevenueChart from "./RevenueChart";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatsCard from "./StatsCard";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-5">
            <StatsCard title="Revenue" value="$24,500" />
            <StatsCard title="Users" value="12,340" />
            <StatsCard title="Orders" value="1,290" />
          </div>
          <div className="mt-8">
  <RevenueChart /><div className="text-center text-gray-500 py-8">
  © 2026 SaaS Dashboard | Internship Project
</div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;