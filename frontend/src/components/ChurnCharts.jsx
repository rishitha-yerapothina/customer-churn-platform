import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Retained", value: 5174 },
  { name: "Churned", value: 1869 },
];

const barData = [
  { type: "Month-to-month", churnRisk: 42 },
  { type: "One year", churnRisk: 11 },
  { type: "Two year", churnRisk: 3 },
];

function ChurnCharts() {
  return (
    <div className="charts-grid">
      <div className="chart-card">
        <h3>Churn Distribution</h3>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} label>
              <Cell fill="#38bdf8" />
              <Cell fill="#f97316" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Churn Risk by Contract</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="churnRisk" fill="#38bdf8" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChurnCharts;