import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 5500 },
  { month: "Mar", revenue: 6200 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 8500 },
];

function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-96">
      <h2 className="text-xl font-bold mb-4">
        Revenue Analytics
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;